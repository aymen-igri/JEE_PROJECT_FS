"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddUser({
  setShowAddUser,
}: {
  setShowAddUser: (show: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    CIN: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Transform form data to match the API structure
      const payload = {
        AdminInfo: {
          fullName: formData.fullName,
          CIN: formData.CIN,
          dateOfBirth: formData.dateOfBirth,
          gender: formData.gender,
          address: formData.address,
          email: formData.email,
          phone: formData.phone,
          registeredBy: "4f5ab273-9680-4b42-8ff2-ff17562c08d5", // You can get this from the logged-in user
        },
        credentials: {
          username: formData.email,
          password: formData.password,
        },
      };

      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `/api/admin/createAccount`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create user");
      }
      setShowAddUser(false);
      router.refresh();
    } catch (error: any) {
      console.error("Error creating user:", error);
      setError(error.message || "Failed to create user");
    } finally {
      setLoading(false);
      //window.location.reload();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 bg-opacity-10 flex items-center justify-center z-50 text-white"
      onClick={() => setShowAddUser(false)}
    >
      <div
        className="bg-[#4d0000] rounded-lg p-8 max-w-2xl w-full h-[90%] mx-4 relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowAddUser(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row justify-start items-center w-full gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">Add New Admin</h2>
            </div>
          </div>

          {error && (
            <div className="w-full bg-red-600/20 border border-red-600 rounded-lg p-3 text-red-200">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-4 text-sm">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-gray-200">
                Full Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] placeholder-gray-400"
                placeholder="Enter full name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="CIN" className="text-gray-200">
                CIN: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="CIN"
                name="CIN"
                value={formData.CIN}
                onChange={handleInputChange}
                required
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] placeholder-gray-400"
                placeholder="Enter CIN"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="dateOfBirth" className="text-gray-200">
                Date of Birth: <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="gender" className="text-gray-200">
                Gender: <span className="text-red-500">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] cursor-pointer"
              >
                <option value="">Select gender</option>
                <option value="HOMME">Male</option>
                <option value="FEMME">Female</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-gray-200">
                Address: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] placeholder-gray-400"
                placeholder="Enter address"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-gray-200">
                Phone: <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] placeholder-gray-400"
                placeholder="Enter phone number"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-200">
                Email: <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] placeholder-gray-400"
                placeholder="Enter email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-gray-200">
                Password: <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                minLength={6}
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] placeholder-gray-400"
                placeholder="Enter password (min 6 characters)"
              />
            </div>

            <div className="flex gap-4 mt-6 pt-4 border-t border-gray-700">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating..." : "Create User"}
              </button>
              <button
                type="button"
                onClick={() => setShowAddUser(false)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
