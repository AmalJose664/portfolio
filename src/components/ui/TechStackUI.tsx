import type { Skill } from "../../lib/types"
import { getIconSrc } from "../utils/icon";
import ShadowBox from "./ShadowBox"


const TechStackUI = ({ skill, isDark }: { skill: Skill, isDark: boolean }) => {
	const iconSrc = getIconSrc(skill.icon);
	return (
		<ShadowBox
			as="a"
			href={skill.href !== '/' ? skill.href : undefined}
			target="_blank"
			rel="noopener noreferrer"
			variant="default"
			className="inline-flex items-center gap-2 rounded-xl bg-card px-3.5 py-2 hover:bg-card/80 group"
		>
			{iconSrc && (
				<img
					src={iconSrc}
					alt={skill.name}
					width={16}
					height={16}
					className={`flex-shrink-0 object-contain ${skill.invert && isDark ? 'invert' : ''}`}
				/>
			)}
			<span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
				{skill.name}
			</span>
		</ShadowBox>
	)
}
export default TechStackUI