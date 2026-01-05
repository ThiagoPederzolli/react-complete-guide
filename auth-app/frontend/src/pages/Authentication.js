import { redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request, params}) {
  const data = await request.formData();
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  // const { mode } = params;
  if (mode !== 'signup' && mode !== 'login') {
    throw new Response(
      JSON.stringify({
            message: 'Unsupported mode'}),
        {
            status: 422,
        }
      )
  }

  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData),
  });

   if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
            message: `Unable to ${mode}`}),
        {
            status: 500,
        }
      )
  }
  const authResp = await response.json();
  const { token } = authResp;
  const expiration = new Date();
  expiration.setHours(expiration.getHours + 1);
  localStorage.setItem('token', JSON.stringify(token));
  localStorage.setItem('expiration', JSON.stringify(expiration.toISOString()));
  return redirect('/');
}