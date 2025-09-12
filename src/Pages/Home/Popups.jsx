import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OfferPopup = () => {
  const navigate = useNavigate();

  const [showOffer, setShowOffer] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "", visible: false });

  // Timers (ms)
  const offerDelay = 3000;
  const reappearDelay = 10000;

  // Storage keys
  const offerDoneKey = "offerDone";
  const offerRejectedKey = "offerRejected";

  useEffect(() => {
    const offerDone = localStorage.getItem(offerDoneKey) === "true";
    const offerRejected = sessionStorage.getItem(offerRejectedKey) === "true";

    if (!offerDone && !offerRejected) {
      const offerTimer = setTimeout(() => setShowOffer(true), offerDelay);
      return () => clearTimeout(offerTimer);
    }

    if (!offerDone && offerRejected) {
      const reappearOffer = setTimeout(() => setShowOffer(true), reappearDelay);
      return () => clearTimeout(reappearOffer);
    }
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ message, type, visible: true });
    setTimeout(() => setToast({ ...toast, visible: false }), 3000);
  };

  // Offer handlers
  const handleOfferAccept = () => {
    localStorage.setItem(offerDoneKey, "true");
    setShowOffer(false);
    showToast("🎉 Offer accepted! Redirecting...", "success");
    setTimeout(() => navigate("/our-packages"), 1500);
  };

  const handleOfferReject = () => {
    sessionStorage.setItem(offerRejectedKey, "true");
    setShowOffer(false);
    showToast("❌ Offer rejected.", "error");
    setTimeout(() => setShowOffer(true), reappearDelay);
  };

  const handleOfferClose = () => {
    sessionStorage.setItem(offerRejectedKey, "true");
    setShowOffer(false);
    setTimeout(() => setShowOffer(true), reappearDelay);
  };

  return (
    <>
      {/* Offer Popup */}
      {showOffer && (
        <div className="fixed animate-wave top-5 sm:top-10 right-2 sm:right-5 z-50 w-[90%] sm:w-80 bg-gradient-to-r from-teal-400 to-indigo-500 text-white rounded-2xl p-4 shadow-lg backdrop-blur-md animate-slideIn">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg sm:text-xl  mb-2">🔥 Special Offer!</h3>
            <button onClick={handleOfferClose} className="text-white font-bold text-xl">×</button>
          </div>
          <p className="text-sm sm:text-base">Get 50% discount on our every package for first 3 month.</p>
          <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2">
            <button
              onClick={handleOfferAccept}
              className="px-3 py-2 bg-green-500 rounded-lg hover:scale-105 transition w-full sm:w-auto"
            >
              Accept
            </button>
            <button
              onClick={handleOfferReject}
              className="px-3 py-2 bg-red-500 rounded-lg hover:scale-105 transition w-full sm:w-auto"
            >
              Reject
            </button>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast.visible && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 p-3 sm:p-4 rounded-xl shadow-lg text-white text-sm sm:text-base ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          } animate-slideDown`}
        >
          {toast.message}
        </div>
      )}

      <style>
        {`
          @keyframes slideIn {
            0% { opacity: 0; transform: translateX(100%); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slideIn { animation: slideIn 0.7s ease-out forwards; }

          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-100%); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideDown { animation: slideDown 0.5s ease-out forwards; }
        `}
      </style>
    </>
  );
};

export default OfferPopup;
