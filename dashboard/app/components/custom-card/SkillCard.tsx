import { Skill } from "@/app/types/skill";
import rgba from "polished/lib/color/rgba";
import { memo, useState } from "react";
import Image from "next/image";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import {
  GitFork
} from "lucide-react";
import SkillModal from "../modal/SkillModal";

export const SkillCard = memo(({ skill }: { skill: Skill }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} style={{
        padding: "12px 18px",
        border: `1px solid ${rgba(0, 180, 220, 0.12)}`,
        cursor: "pointer",
        borderRadius: "4px",
        backgroundColor: "#060c14",
        marginBottom: "8px",
      }}>
        <div style={{
          display: "flex",
          gap: "10px"
        }}>
          <div>
            <div style={{
              display: "flex",
              gap: "10px"
            }}>
              <Image 
                src={skill.authorAvatar} 
                alt={"ava"}
                width={20}
                height={20}
                style={{ borderRadius: "50%" }}
              />
              <div style={{ fontSize: "12px" }}>
                <span style={{ color: "#4a6a82" }}>{skill.author} /</span> <span style={{ color: "#00c8f0" }}>{skill.name}</span>
              </div>
            </div>
            <div style={{ color: "#4a6a82", marginLeft: "30px", fontSize: "11px" }}>{skill.description}</div>
          </div>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px"
        }}>
          <div style={{
            display: "flex",
            gap: "10px",
            alignItems: "center"
          }}>
            <div style={{ 
              fontSize: "10px", 
              color: "#4a6a82",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}>
              <StarBorderRoundedIcon sx={{ fontSize: "12px", color: "#ff9500" }}/> <span>{skill.stars}</span>
            </div>
            <div style={{ 
              fontSize: "10px", 
              color: "#4a6a82",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}>
              <GitFork size={12} color="#4a6a82" />
              <span style={{ fontSize: "10px", color: "#4a6a82", marginLeft: "4px" }}>{skill.forks}</span>
            </div>
          </div>

          <div style={{ color: "#4a6a82", fontSize: "10px" }}>{skill.path + " . " + skill.branch}</div>
        </div>
      </div>
      <SkillModal open={open} setOpen={setOpen} skill={skill} />
    </>
  )
});