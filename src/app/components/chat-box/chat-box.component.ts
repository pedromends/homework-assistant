import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  standalone: false,
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss'
})
export class ChatBoxComponent {
  userInput = '';
  messages: { text: string; type: 'user' | 'bot' }[] = [];

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Adiciona mensagem do usuário
    this.messages.push({ text: this.userInput, type: 'user' });

    // Resposta simulada do "bot"
    setTimeout(() => {
      this.messages.push({
        text: 'Recebi sua pergunta: "' + this.userInput + '"',
        type: 'bot',
      });
    }, 500);

    this.userInput = '';
  }
}
