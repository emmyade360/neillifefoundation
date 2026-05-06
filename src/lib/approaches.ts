export type Approach = {
  slug: "advocacy" | "policy" | "sexualhealth";
  title: string;
  summary: string;
  details: string[];
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  videoTitle: string;
  videoSrc: string;
};

export const APPROACHES: Approach[] = [
  {
    slug: "advocacy",
    title: "Advocating for Rights and Inclusion",
    summary: "Community-led advocacy that builds voice, confidence, and participation.",
    details: [
      "This story reflects a room where women and girls with disabilities are not waiting to be represented. They are speaking, leading, and shaping the direction of the conversation themselves.",
      "Our advocacy model focuses on practical empowerment: confidence building, rights awareness, and collective organizing that helps participants move from silence to civic presence.",
      "When communities witness this shift first-hand, inclusion becomes more than a slogan. It becomes shared responsibility backed by real voices.",
    ],
    imageSrc: "/images/EV_NYFF_9.jpeg",
    imageAlt: "Group photo of women and girls",
    imageCaption: "Group photo of women and girls",
    videoTitle: "In focus: grassroots voices driving inclusion.",
    videoSrc: "https://res.cloudinary.com/dfcpht2ua/video/upload/q_auto/f_auto/v1778064440/VID-20260328-WA0021_ldiv5s.mp4",
  },
  {
    slug: "policy",
    title: "Driving Inclusive Policy Change",
    summary: "Turning lived experience into actionable policy commitments.",
    details: [
      "The video captures what policy change should look like: stakeholders in dialogue with the people most affected by exclusion, in the same space and at the same table.",
      "At Neil Life Foundation, we translate community realities into specific recommendations that institutions can adopt, monitor, and improve over time.",
      "This approach closes the gap between policy language and daily life, helping ensure decisions are informed by people, not assumptions.",
    ],
    imageSrc: "/images/EV_NYFF_10.jpeg",
    imageAlt: "Stakeholders including men and women",
    imageCaption: "Stakeholders including men and women",
    videoTitle: "In focus: policy dialogue in action.",
    videoSrc: "https://res.cloudinary.com/dfcpht2ua/video/upload/q_auto/f_auto/v1778064438/VID-20260406-WA0090_p1lypd.mp4",
  },
  {
    slug: "sexualhealth",
    title: "Promoting Sexual and Reproductive Health and Rights",
    summary: "Advancing health dignity, informed choices, and accessible care.",
    details: [
      "This session shows health conversations becoming clearer, safer, and more empowering for young persons with disabilities.",
      "We combine rights education with practical guidance on where to seek care, how to ask for support, and how to make informed health decisions with confidence.",
      "Our goal is simple: ensure every participant leaves with knowledge they can use, language they can trust, and a stronger sense of personal dignity.",
    ],
    imageSrc: "/images/EV_NYFF_8.jpeg",
    imageAlt: "A woman addressing youths on sexual reproductive health",
    imageCaption: "A woman addressing youths on sexual reproductive health",
    videoTitle: "In focus: health rights conversations that build confidence.",
    videoSrc: "https://res.cloudinary.com/dfcpht2ua/video/upload/q_auto/f_auto/v1778064377/VID-20260414-WA0004_bjktpk.mp4",
  },
];

export function getApproachBySlug(slug: string): Approach | undefined {
  return APPROACHES.find((approach) => approach.slug === slug);
}
