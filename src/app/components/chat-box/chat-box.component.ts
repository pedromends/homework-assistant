import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-chat-box',
	standalone: false,
	templateUrl: './chat-box.component.html',
	styleUrl: './chat-box.component.scss',
	animations: [
		trigger('fadeIn', [
			transition(':enter', [
				style({ opacity: 0, transform: 'translateY(10px)' }),
				animate('250ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
			])
		])
	]
})
export class ChatBoxComponent {

	@ViewChild('chatContainer') chatContainer!: ElementRef;

	carregando = false;
	prompt = '';
	resposta = '';
	conversa: { texto: string, tipo: 'user' | 'bot' }[] = [];
	mostrarBotaoScroll = false;

	constructor() { }

	private readonly API_KEY = 'AIzaSyCzAJ2TIsAsIFkmAnB8Rdm_nTyDwwhoqoQ';

	genAI = new GoogleGenerativeAI(this.API_KEY);
	model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

	async run() {
		if (!this.prompt.trim()) return;

		this.conversa.push({ texto: this.prompt, tipo: 'user' });

		const result = await this.model.generateContent(this.prompt);
		const response = await result.response;
		const text = response.text();

		this.carregando = false;
		this.resposta = text;

		const textoFormatado = this.formatarMarkdown(text);

		this.simularDigitacao(textoFormatado);
		this.conversa.push({ texto: textoFormatado, tipo: 'bot' });

		this.prompt = '';
		this.scrollToBottom(true);
	}

	simularDigitacao(textoCompleto: string) {
		let textoAtual = '';
		const velocidade = 15;
		let i = 0;

		const intervalo = setInterval(() => {
			textoAtual += textoCompleto[i];
			i++;

			if (i === textoCompleto.length) {
				clearInterval(intervalo);
			}

			if (this.conversa.length > 0 && this.conversa[this.conversa.length - 1].tipo === 'bot') {
				this.conversa[this.conversa.length - 1].texto = textoAtual;
			} else {
				this.conversa.push({ texto: textoAtual, tipo: 'bot' });
			}

			this.scrollToBottom();
		}, velocidade);
	}

	scrollToBottom(force = false) {
		setTimeout(() => {
			if (this.chatContainer) {
				const container = this.chatContainer.nativeElement;

				const nearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 100;
				if (force || nearBottom) {
					container.scrollTop = container.scrollHeight;
					this.mostrarBotaoScroll = false;
				}
			}
		}, 100);
	}

	verificarScroll() {
		const container = this.chatContainer?.nativeElement;
		if (!container) return;

		const nearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 100;
		this.mostrarBotaoScroll = !nearBottom;
	}

	formatarMarkdown(texto: string): string {
		return texto
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // negrito
			.replace(/\n\n/g, '<br><br>') // parágrafo
			.replace(/\n/g, '<br>');      // quebra de linha
	}
}
