"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// ✅ Mock API
const useCreateAppointmentApiMutation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const createAppointment = async (formData) => {
    setIsLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsLoading(false);
        console.log("Form submitted:", Object.fromEntries(formData.entries()));
        resolve({ success: true });
      }, 1500);
    });
  };
  return [createAppointment, { isLoading }];
};

// ✅ Appointment Modal (2 steps: Clinic Selection → Form)
const AppointmentModal = ({ isOpen, onClose }) => {
  const [createAppointment, { isLoading }] = useCreateAppointmentApiMutation();
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await axios.get("/data/clinics.json");
        setClinics(response.data);
      } catch (error) {
        console.error("Failed to fetch clinics:", error);
      }
    };
    fetchClinics();
  }, []);

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    appointment_date: "",
    appointment_time: "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    appointment_date: Yup.string().required("Date is required"),
    appointment_time: Yup.string().required("Time is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      for (const key in values) formData.append(key, values[key]);
      formData.append("clinic", selectedClinic.name);

      await createAppointment(formData);
      toast.success(`Appointment booked successfully at ${selectedClinic.name}!`);
      resetForm();
      setSelectedClinic(null);
      onClose();
    } catch (error) {
      toast.error("Failed to book appointment. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl w-11/12 md:w-4/6 max-w-3xl mx-4 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-[var(--lightblue)] to-white rounded-t-2xl">
              <h2 className="text-xl font-semibold text-[var(--darkblue)]">
                {selectedClinic ? "Book an Appointment" : "Choose a Clinic"}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-[var(--primary)] transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Step 1: Choose Clinic */}
            {!selectedClinic && (
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {clinics.map((clinic) => (
                  <motion.div
                    key={clinic.name}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white border border-b-blue-950 rounded-md transition cursor-pointer overflow-hidden"
                    onClick={() => setSelectedClinic(clinic)}
                  >
                    <div className="relative h-32 w-full">
                      <Image
                        src={clinic.imageUrl}
                        alt={clinic.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[var(--darkblue)]">
                        {clinic.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{clinic.tagline}</p>
                      <p className="text-xs text-gray-500 mt-2">{clinic.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Step 2: Appointment Form */}
            {selectedClinic && (
              <div className="p-8">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Booking at:
                    <span className="font-semibold text-[var(--primary)] ml-1">
                      {selectedClinic.name}
                    </span>
                  </p>
                  <button
                    onClick={() => setSelectedClinic(null)}
                    className="text-xs text-[var(--primary)] hover:underline"
                  >
                    ← Change clinic
                  </button>
                </div>

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {() => (
                    <Form className="grid gap-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                          { name: "first_name", placeholder: "First Name" },
                          { name: "last_name", placeholder: "Last Name" },
                          { name: "email", placeholder: "Email Address", type: "email" },
                          { name: "phone", placeholder: "Phone Number" },
                        ].map(({ name, placeholder, type = "text" }) => (
                          <div key={name}>
                            <Field
                              type={type}
                              name={name}
                              placeholder={placeholder}
                              className="border border-gray-300 rounded-lg px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                            />
                            <ErrorMessage
                              name={name}
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                        ))}

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Appointment Date
                          </label>
                          <Field
                            type="date"
                            name="appointment_date"
                            className="border border-gray-300 rounded-lg px-4 py-2.5 w-full focus:ring-2 focus:ring-[var(--primary)] cursor-pointer"
                          />
                          <ErrorMessage
                            name="appointment_date"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Appointment Time
                          </label>
                          <Field
                            type="time"
                            name="appointment_time"
                            className="border border-gray-300 rounded-lg px-4 py-2.5 w-full focus:ring-2 focus:ring-[var(--primary)] cursor-pointer"
                          />
                          <ErrorMessage
                            name="appointment_time"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="mt-6 bg-[var(--primary)] hover:bg-[var(--darkblue)] text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                        disabled={isLoading}
                      >
                        {isLoading ? "Booking..." : "Confirm Appointment"}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ✅ Navbar
const navItems = [
  { name: "Home", path: "/" },
  { name: "Clinics", path: "/clinics" },
  { name: "Treatments", path: "/treatments" },
  { name: "Doctors", path: "/doctor" },
  { name: "Contact", path: "/contact" },
  { name: "Dashboard", path: "/dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="_max_width flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-[var(--primary)]">
            🏥 <span className="text-[var(--darkblue)]">HealthCare</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-medium transition ${
                  pathname === item.path
                    ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
                    : "text-[var(--darkblue)] hover:text-[var(--primary)]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:inline-block bg-[var(--primary)] text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-[var(--darkblue)] transition shadow-sm"
          >
            Book Appointment
          </button>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-[var(--darkblue)]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="flex flex-col space-y-3 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium ${
                    pathname === item.path
                      ? "text-[var(--primary)]"
                      : "text-[var(--darkblue)] hover:text-[var(--primary)]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            <button
  onClick={() => setIsModalOpen(true)}
  className="hidden md:inline-block bg-[var(--primary)] text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-[var(--darkblue)] transition shadow-sm cursor-pointer"
>
  Book Appointment
</button>
            </div>
          </div>
        )}
      </nav>

      {/* Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}
