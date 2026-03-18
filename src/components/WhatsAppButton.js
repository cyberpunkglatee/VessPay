'use client';

import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
    const whatsappNumber = "233247132722"; // Actual number
    const message = "Hi VessPay, I'd like to learn more about your services.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={24} />
            <span className={styles.tooltip}>Chat with us</span>
        </a>
    );
}
