import { redirect } from 'next/navigation';

export default function TeachersPage() {
  // Redirect to teachers dashboard
  redirect('/teachers/dashboard');
}
