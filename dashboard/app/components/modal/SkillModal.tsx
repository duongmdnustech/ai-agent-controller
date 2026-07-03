import Box from '@mui/material/Box';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Skill } from '@/app/types/skill';
import rgba from 'polished/lib/color/rgba';
import Divider from '@mui/material/Divider';
import { GitFork } from 'lucide-react';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#0b1520',
  border: `1px solid ${rgba(0, 180, 220, 0.12)}`,
  boxShadow: 24,
  p: 4,
  borderRadius: "8px"
};

export default function SkillModal({ open, setOpen, skill }: { open: boolean, setOpen: (open: boolean) => void, skill: Skill }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography component="div">
            <div style={{
              display: "flex",
              gap: "10px"
            }}>
              <Image 
                src={skill.authorAvatar} 
                alt={"ava"}
                width={30}
                height={30}
                style={{ borderRadius: "50%" }}
              />
              <div style={{ fontSize: "12px", minWidth: 0, flexGrow: 1 }}>
                <div>
                  <span style={{ color: "#4a6a82" }}>{skill.author} /</span> <span style={{ color: "#00c8f0", fontWeight: "bold" }}>{skill.name}</span>
                </div>
                <div style={{ 
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: "11px",
                  color: "#4a6a82"
                }}>{skill.githubUrl}</div>
              </div>
            </div>
          </Typography>
          <Divider sx={{ width: "100%", backgroundColor: rgba(0, 180, 220, 0.12) }} />
          <Typography id="modal-modal-description" sx={{ mt: 2, color: "#c8d8e8", fontSize: "11px", textAlign: "justify" }} component="div">
            {skill.description}
          </Typography>
          <Typography component="div">
            <div>

            </div>
            <div>

            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
