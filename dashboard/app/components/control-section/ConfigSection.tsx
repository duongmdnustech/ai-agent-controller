"use client";

import { memo, useState } from "react"; // 1. Added useState
import {
  Container,
  Divider,
  MenuItem,
  TextField
} from "@mui/material";
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { rgba } from "polished";
import { textFieldStyles } from "../custom-css/TextFieldStyle";

const PROVIDERS = [
  { value: '', label: "Select AI Provider" },
  { value: 'anthropic', label: "Claude (Anthropic)" },
  { value: 'openai', label: "ChatGPT (OpenAI)" },
  { value: 'gemini', label: "Google Gemini" }
];

function Config() {
  // 2. Manage the selected provider state explicitly
  const [provider, setProvider] = useState("");
  const [apiKey, setApiKey] = useState("");

  return (
    <Container style={{
      border: `1px solid ${rgba(0, 180, 220, 0.12)}`,
      color: "#4a6a82",
      padding: "0px",
      borderRadius: "8px",
      backgroundColor: "#0b1520"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px" }}>
        <TuneRoundedIcon />
        <div>CONFIGURATION</div>
      </div>
      
      <Divider sx={{ width: "100%", backgroundColor: rgba(0, 180, 220, 0.12) }} />
      
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px 12px" }}>
        <TextField
          required
          size="small"
          id="folder-path"
          label="Folder Path"
          placeholder="Enter folder path..."
          sx={textFieldStyles}
        />

        <TextField
          required={!!provider}
          size="small"
          id="api-key"
          label="API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter API key..."
          sx={textFieldStyles}
        />

        {/* 3. Updated to be a fully controlled component */}
        <TextField
          required={!!apiKey}
          id="select-provider"
          select
          size="small"
          label="AI Provider"
          value={provider} // Use value instead of defaultValue
          onChange={(e) => setProvider(e.target.value)} // Update state on change
          sx={textFieldStyles}
        >
          {PROVIDERS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Container>
  );
}

const ConfigSection = memo(Config);
export default ConfigSection;