import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LeadModal({ open, onClose }: LeadModalProps) {

  // 🔒 Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full max-w-md">

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 z-10 bg-white shadow-md rounded-full p-2"
              >
                <X size={18} />
              </button>

              <LeadForm />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
