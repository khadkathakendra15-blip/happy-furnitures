import React, { useState } from 'react';

export default function NotifyModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-[#0D162B] border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 text-slate-400 hover:text-white w-8 h-8 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700/60 transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center">
                <img src="/logo.jpg" alt="Happy Furnitures" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">Stay Updated</h3>
                <p className="text-xs text-slate-400">Happy Furnitures Launch Notification</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              We are putting the finishing touches on our exclusive furniture collection. Drop your email below to be the first to know when we launch!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#E62B3A] focus:ring-1 focus:ring-[#E62B3A] text-sm transition-all"
                  autoFocus
                />
                {error && <p className="text-xs text-red-400 mt-1.5">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-[#E62B3A] hover:bg-[#ff3b4e] text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(230,43,58,0.5)] active:scale-[0.98]"
              >
                Notify Me
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-red-500/20 text-[#E62B3A] mx-auto flex items-center justify-center mb-3 text-xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Thank you!</h3>
            <p className="text-sm text-slate-300 mb-6">
              We've added <span className="text-white font-medium">{email}</span> to our priority VIP notification list. You'll hear from us as soon as we open.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
