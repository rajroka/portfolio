'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import ContactModal from './ContactModal';

export default function NavbarWrapper() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onContact={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
