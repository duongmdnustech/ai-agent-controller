"use client";

import { memo, useState, useEffect } from "react";
import { 
  Container,
  Button,
  Divider
} from "@mui/material";
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import rgba from "polished/lib/color/rgba";
import { fetchSkills } from "../../services/SkillsService";
import { Skill } from "@/app/types/skill";
import { SkillCard } from "../custom-card/SkillCard";

function SkillList() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      const skillsData = await fetchSkills();
      setSkills(skillsData.skills || []);
    };

    loadSkills();
  }, []);

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
        <MenuBookRoundedIcon />
        <div>SKILLS</div>
      </div>
      <Divider sx={{ width: "100%", backgroundColor: rgba(0, 180, 220, 0.12) }} />
      <div style={{ padding: "8px 12px" }}>
        {skills.map((skill: Skill, index: number) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </Container>
  )
}

const SkillsSection = memo(SkillList);
export default SkillsSection;