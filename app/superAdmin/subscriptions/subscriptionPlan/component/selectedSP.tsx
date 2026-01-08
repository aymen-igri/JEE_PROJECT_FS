"use client";

import { X, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export default function selectedSP({
  selectedSP,
  setSelectedSP,
}:{
  selectedSP: any,
  setSelectedSP: any
}) {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: selectedSP.name || "",
    price: selectedSP.price || 0,
    billingCycle: selectedSP.billingCycle || "",
    maxDoctors: selectedSP.maxDoctors || 0,
    maxSecretary: selectedSP.maxSecretary || 0,
    isActive: selectedSP.isActive ?? true,
    features: selectedSP.features || [""],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Parse numeric fields
    let parsedValue: string | number | boolean = value;
    if (name === 'price' || name === 'maxDoctors' || name === 'maxSecretary') {
      parsedValue = value === '' ? 0 : Number(value);
    } else if (name === 'isActive') {
      parsedValue = value === 'Active';
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  const handleAddFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }));
  };

  const handleRemoveFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_ : string, i: number) => i !== index),
    }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.map((feature: string, i: number) => (i === index ? value : feature)),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = {
        id: selectedSP.id,
        planName: formData.name || selectedSP.name,
        price: formData.price || selectedSP.price,
        billingCycle: formData.billingCycle || selectedSP.billingCycle,
        maxDoctors: formData.maxDoctors || selectedSP.maxDoctors,
        maxSecretary: formData.maxSecretary || selectedSP.maxSecretary,
        features: formData.features.filter((f: string) => f.trim() !== ""),
        isActive: formData.isActive,
      };

      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `/api/subscriptionPlan/update`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create user");
      }

      // Success - refresh the user list and close modal
      setSelectedSP(null);
      window.location.reload();
    } catch (error: any) {
      console.error("Error creating user:", error);
      setError(error.message || "Failed to create user");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div
      className="fixed inset-0 bg-black/90 bg-opacity-10 flex items-center justify-center z-50 text-white"
      onClick={() => setSelectedSP(null)}
    >
      <div
        className="bg-[#4d0000] rounded-lg p-8 max-w-2xl w-full h-[90%] mx-4 relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedSP(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row justify-start items-center w-full gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">Edit Subscription Plan</h2>
            </div>
          </div>

          {error && (
            <div className="w-full bg-red-600/20 border border-red-600 rounded-lg p-3 text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="w-full space-y-4 text-sm">
            <div className="flex flex-col gap-2">
              <label className="text-gray-200">ID:</label>
              <input
                type="text"
                value={selectedSP.id || ""}
                disabled
                className="px-4 py-2 bg-[#5d0000] text-gray-400 rounded-lg border border-[#3d0000] cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-200">
                Subscription plan name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] placeholder-gray-400"
                placeholder="Enter Plan Name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="text-gray-200">
                Price (MAD): <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] placeholder-gray-400"
                placeholder="Enter Price"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-200">Created By:</label>
              <input
                type="text"
                value={selectedSP.createdBy || ""}
                disabled
                className="px-4 py-2 bg-[#5d0000] text-gray-400 rounded-lg border border-[#3d0000] cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="billingCycle" className="text-gray-200">
                Billing Cycle: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="billingCycle"
                name="billingCycle"
                value={formData.billingCycle}
                onChange={handleInputChange}
                required
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] placeholder-gray-400"
                placeholder="Enter Billing Cycle"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="maxDoctors" className="text-gray-200">
                Max Doctors: <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="maxDoctors"
                name="maxDoctors"
                value={formData.maxDoctors}
                onChange={handleInputChange}
                required
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] placeholder-gray-400"
                placeholder="Enter Max Doctors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="maxSecretary" className="text-gray-200">
                Max Secretary: <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="maxSecretary"
                name="maxSecretary"
                value={formData.maxSecretary}
                onChange={handleInputChange}
                required
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] placeholder-gray-400"
                placeholder="Enter Max Secretary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-200">
                Features: <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {formData.features.map((feature: string, index: number) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => handleFeatureChange(index, e.target.value)}
                      required
                      className="flex-1 px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] placeholder-gray-400"
                      placeholder={`Feature ${index + 1}`}
                    />
                    {formData.features.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveFeature(index)}
                        className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                        title="Remove feature"
                      >
                        <Trash2 size={20} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddFeature}
                  className="flex items-center gap-2 px-4 py-2 bg-[#9F0000] hover:bg-[#8F0000] text-white rounded-lg transition-colors"
                >
                  <Plus size={20} />
                  Add Feature
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="isActive" className="text-gray-200">
                Status: <span className="text-red-500">*</span>
              </label>
              <select
                id="isActive"
                name="isActive"
                value={formData.isActive ? "Active" : "Inactive"}
                onChange={handleInputChange}
                className="px-4 py-2 bg-[#7F0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#9F0000] cursor-pointer"
              >
                <option value="Active" className="bg-[#4d0000]">Active</option>
                <option value="Inactive" className="bg-[#4d0000]">Inactive</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-200">Created At:</label>
              <input
                type="text"
                value={selectedSP.createdAt || ""}
                disabled
                className="px-4 py-2 bg-[#5d0000] text-gray-400 rounded-lg border border-[#3d0000] cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-200">Updated At:</label>
              <input
                type="text"
                value={selectedSP.updatedAt || ""}
                disabled
                className="px-4 py-2 bg-[#5d0000] text-gray-400 rounded-lg border border-[#3d0000] cursor-not-allowed"
              />
            </div>

            <div className="flex gap-4 mt-6 pt-4 border-t border-gray-700">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Updating..." : "Update Subscription Plan"}
              </button>
              <button
                type="button"
                onClick={() => setSelectedSP(null)}
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
