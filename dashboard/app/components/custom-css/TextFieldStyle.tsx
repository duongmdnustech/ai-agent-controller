import rgba from "polished/lib/color/rgba";

export const textFieldStyles = {
  "& .MuiInputBase-input": { color: "#4a6a82" },
  "& .MuiInputBase-input::placeholder": { color: "#4a6a82", opacity: 0.6 },
  "& .MuiInputLabel-root": { color: "#4a6a82" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#00b4dc" },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: rgba(0, 180, 220, 0.2) },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: rgba(0, 180, 220, 0.4) },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#00b4dc" },
  "& .MuiSelect-icon": { color: "#4a6a82" }
};