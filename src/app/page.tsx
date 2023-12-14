import Image from 'next/image';
import HomePage from './pages';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MainPage() {
  return (
    <div>
      <h1>Main Page</h1>
      <HomePage />
    </div>
  );
};