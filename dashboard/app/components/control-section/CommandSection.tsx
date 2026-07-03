"use client";

import { 
  Container,
  Button,
  Divider,
  TextField
} from "@mui/material";
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import { rgba } from 'polished';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { memo, useState } from "react";

const commandList = [
  "scan"
]

function Command() {
  const [command, setCommand] = useState("");

  return (
    <Container style={{
      border: `1px solid ${rgba(0, 180, 220, 0.12)}`,
      color: "#4a6a82",
      padding: "0px",
      borderRadius: "8px",
      backgroundColor: "#0b1520"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "8px 12px",
      }}>
        <TerminalRoundedIcon />
        <div>COMMAND</div>
      </div>
      <Divider sx={{ width: "100%", backgroundColor: rgba(0, 180, 220, 0.12) }} />
      <div style={{
        padding: "8px 12px",
      }}>
        {commandList.map((command, index) => (
          <div key={index} style={{
            padding: "4px 6px",
            border: `1px solid ${rgba(0, 180, 220, 0.12)}`,
            width: "fit-content",
            cursor: "pointer",
            borderRadius: "4px"
          }}
          onClick={() => setCommand(command)}
          >
            {command}
          </div>
        ))}
      </div>
      <Divider sx={{ width: "100%", backgroundColor: rgba(0, 180, 220, 0.12) }} />
      <div style={{
        display: "flex",
        padding: "8px 12px",
        gap: "10px",
        alignItems: "center",
        margin: "10px"
      }}>
        <KeyboardArrowRightRoundedIcon />
        <TextField
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Enter command..."
          variant="outlined"
          size="small"
          sx={{ 
            color: "#4a6a82", 
            "& .MuiInputBase-input": {
              color: "#4a6a82",
              opacity: 1,
            }
          }}
        />
        <Button style={{
          marginLeft: "auto"
        }} startIcon={<SendRoundedIcon />}>Run</Button>
      </div>
    </Container>
  )
}

const CommandSection = memo(Command);

export default CommandSection;
