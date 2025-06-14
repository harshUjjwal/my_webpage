import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, User } from "lucide-react";
import { motion } from "framer-motion";

interface PhotoUploadProps {
  onPhotoChange: (photoUrl: string) => void;
  currentPhoto?: string;
}

const PhotoUpload = ({ onPhotoChange, currentPhoto }: PhotoUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onPhotoChange(result);

        // In a real application, you would upload this to your server
        // and store it in the public/assets folder
        console.log("Photo uploaded:", file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        className={`relative w-48 h-48 rounded-full border-4 border-dashed transition-colors ${
          isDragging
            ? "border-portfolio-500 bg-portfolio-50"
            : "border-gray-300"
        } ${currentPhoto ? "border-solid border-portfolio-500" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {currentPhoto ? (
          <img
            src={currentPhoto}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <User size={48} />
            <p className="mt-2 text-sm text-center">
              {isDragging ? "Drop photo here" : "Profile Photo"}
            </p>
          </div>
        )}

        <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
          <Upload className="text-white" size={24} />
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </motion.div>

      <Button
        variant="outline"
        onClick={() => fileInputRef.current?.click()}
        className="text-portfolio-600 border-portfolio-300 hover:bg-portfolio-50"
      >
        <Upload size={16} className="mr-2" />
        Upload Photo
      </Button>

      <p className="text-xs text-gray-500 text-center max-w-xs">
        Click or drag and drop to upload your profile photo. The image will be
        stored in /public/assets folder.
      </p>
    </div>
  );
};

export default PhotoUpload;
