'use client';

import { createContext, useContext, useState } from 'react';

interface ContactModalContextType {
  open: () => void;
}

const ContactModalContext = createContext<ContactModalContextType>({ open: () => {} });

export function useContactModal() {
  return useContext(ContactModalContext);
}

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContactModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      {/* Lazy import to avoid circular deps */}
      {isOpen && (
        <ContactModalInner onClose={() => setIsOpen(false)} />
      )}
    </ContactModalContext.Provider>
  );
}

// Inline to avoid circular import
import ContactModal from '@/components/ContactModal';

function ContactModalInner({ onClose }: { onClose: () => void }) {
  return <ContactModal isOpen={true} onClose={onClose} />;
}
