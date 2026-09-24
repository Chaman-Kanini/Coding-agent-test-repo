import React, { useRef, useState } from 'react';
import '../styles/wireframes/login.css';

/**
 * Login page component.
 *
 * Renders the fidelity reference markup inside the data-screen wrapper
 * and provides controlled form state, client-side validation, keyboard
 * focus management, and accessible error messaging. No authentication
 * or navigation is performed by this component.
 */
export default function Login(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const next: { email?: string; password?: string } = {};
    if (!email) next.email = 'Email is required';
    else {
      // simple email regex for malformed checking as required by tests
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) next.email = 'Enter a valid email address';
    }

    if (!password) next.password = 'Password is required';
    setErrors(next);
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    if (next.email) {
      // move focus to email
      emailRef.current?.focus();
      return;
    }
    if (next.password) {
      passwordRef.current?.focus();
      return;
    }
    // No authentication or navigation - just do nothing (per scope)
  };

  const emailErrId = errors.email ? 'email-error' : undefined;
  const passwordErrId = errors.password ? 'password-error' : undefined;

  return (
    <div data-screen="repo-login">
      <main className="auth-shell">
        <aside className="auth-visual">
          <a className="brand" href="landing.html" aria-label="Northstar home">
            <span className="brand-mark" aria-hidden="true"></span>
            Northstar
          </a>
          <div className="visual-quote">
            <blockquote>“Northstar gave our team the shared rhythm we were missing.”</blockquote>
            <div className="quote-author">
              <span className="author-mark">MO</span>
              <span><strong>Maya Okafor</strong>Head of Product at Fieldwork</span>
            </div>
          </div>
        </aside>

        <section className="auth-main">
          <div className="auth-top">New to Northstar?&nbsp; <a href="signup.html">Create an account</a></div>
          <div className="auth-form-wrap">
            <a className="brand mobile-brand" href="landing.html" aria-label="Northstar home">
              <span className="brand-mark" aria-hidden="true"></span>
              Northstar
            </a>
            <p className="eyebrow">Welcome back</p>
            <h1>Log in to your workspace.</h1>
            <p className="auth-intro">Pick up where your team left off.</p>

            <button className="social-button" type="button"><span className="social-mark">G</span>Continue with Google</button>
            <div className="divider">or use email</div>

            <form className="form-grid" onSubmit={onSubmit} noValidate role="form">
              <div className="field">
                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="you@company.com"
                  aria-describedby={emailErrId}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email ? (
                  <div id="email-error" role="status" aria-live="polite" style={{ color: 'red' }}>
                    {errors.email}
                  </div>
                ) : null}
              </div>

              <div className="field">
                <div className="password-label">
                  <label htmlFor="password">Password</label>
                  <a href="#" tabIndex={-1}>Forgot password?</a>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  minLength={8}
                  aria-describedby={passwordErrId}
                  aria-invalid={errors.password ? 'true' : 'false'}
                />
                {errors.password ? (
                  <div id="password-error" role="status" aria-live="polite" style={{ color: 'red' }}>
                    {errors.password}
                  </div>
                ) : null}
              </div>

              <div className="form-options">
                <label className="checkbox" htmlFor="remember">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    tabIndex={-1}
                  />
                  Keep me logged in
                </label>
              </div>
              <button className="submit-button" type="submit">Log in <i className="icon" data-lucide="arrow-right" aria-hidden="true"></i></button>
            </form>

            <p className="auth-footnote">By continuing, you agree to Northstar’s Terms and Privacy Policy.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
