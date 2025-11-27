
import Layout from "@/components/layout/Layout";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Globe, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const delegationMembers = [
  {
    name: "Alankrita Singh",
    department: "Computer Science",
    filename: "Alankrita_Singh(CSE).jpg",
    role: "Delegate"
  },
  {
    name: "Arckit Arihant",
    department: "Computer Science (AI&ML)",
    filename: "Arckit Arihant_ CSE(AIML).jpg",
    role: "Delegate"
  },
  {
    name: "J V Benakasree",
    department: "Computer Science",
    filename: "J V Benakasree_CSE.jpg",
    role: "Delegate"
  },
  {
    name: "Varun A",
    department: "Electrical and Electronics Engineering",
    filename: "Varun A - eee.JPG",
    role: "Delegate"
  },
  {
    name: "Dhatri Venkatesh Aralaguppe",
    department: "Computer Science",
    filename: "DhatriVenkateshAralaguppe_CSE.jpg",
    role: "Delegate"
  },
  {
    name: "Venkatnaga Shreyas P H",
    department: "Computer Science",
    filename: "Venkatnaga Shreyas P H_CSE .jpg",
    role: "Delegate"
  },
  {
    name: "Priyanka N Manturmath",
    department: "Computer Science",
    filename: "Priyanka N Manturmath .JPG",
    role: "Delegate"
  },
  {
    name: "Vachan B Hindiskere",
    department: "Computer Science",
    filename: "VachanBHindiskere_CSE.jpg",
    role: "Delegate"
  },
  {
    name: "Sourab Bavikatti",
    department: "Computer Science",
    filename: "Sourab Bavikatti - CSE.jpg",
    role: "Delegate"
  },
  {
    name: "Nuha Alishba",
    department: "Computer Science (Data Science)",
    filename: "NuhaAlishba_CSE-DS.jpg",
    role: "Delegate"
  },
  {
    name: "Manu T",
    department: "Computer Science (AI&ML)",
    filename: "Manu_T_AIMLD.jpg",
    role: "Delegate"
  },
  {
    name: "Ananya patil A",
    department: "Computer Science",
    filename: "Ananya_patil A_CSE.jpg",
    role: "Delegate"
  },
  {
    name: "Sankalp C Pai",
    department: "Computer Science (Cyber Security)",
    filename: "Sankalp C Pai -Cybersecurity-1RN25CY015-T.jpg",
    role: "Delegate"
  },
  {
    name: "Kapil Pal",
    department: "Computer Science (AI&ML)",
    filename: "Kapil Pal AIML.jpg",
    role: "Delegate"
  },
  {
    name: "Divya Sharma",
    department: "Electronics and Communication Engineering",
    filename: "Divya sharma-ECE (1).jpg",
    role: "Delegate"
  },
  {
    name: "Aritri Bhattacharya",
    department: "Computer Science (AI&ML)",
    filename: "AritriBhattacharya_AIML.jpg",
    role: "Delegate"
  },
  {
    name: "Chinmoy Das",
    department: "Computer Science (Data Science)",
    filename: "Chinmoy_das_DS(A).png",
    role: "Delegate"
  },
  {
    name: "Tanmay Prakash Shetty",
    department: "Computer Science",
    filename: "Tanmay Shetty_CSEJ.png",
    role: "Delegate"
  },
  {
    name: "Prisha Singh",
    department: "Computer Science",
    filename: "Prisha Singh CSE-G.jpg",
    role: "Delegate"
  },
  {
    name: "Kanisha Nath",
    department: "Computer Science",
    filename: "KANISHANATH_CSE.jpg",
    role: "Delegate"
  },
  {
    name: "Nishtaa Harsha",
    department: "Computer Science",
    filename: "Nishtaa Harsha_CSE.jpg",
    role: "Delegate"
  },
  {
    name: "Bhargavi Gangoor",
    department: "Computer Science (Cyber Security)",
    filename: "BhargaviGangoor_CY (1).jpg",
    role: "Delegate"
  },
  {
    name: "Divyansh",
    department: "Computer Science",
    filename: "Divyansh CSE.jpg",
    role: "Delegate"
  },
  {
    name: "Ankita meher",
    department: "Computer Science",
    filename: "Ankita Meher -CSE.jpg",
    role: "Delegate"
  },
  {
    name: "Dhanya S Raj",
    department: "Computer Science",
    filename: "DhanyaSRaj CSE.jpg",
    role: "Delegate"
  },
  {
    name: "Anantha Narayan R Prabhu",
    department: "Computer Science",
    filename: "Anantha Narayan_CSE.jpg",
    role: "Delegate"
  },
  {
    name: "Sankeerthana Kasi",
    department: "Electronics and Communication Engineering",
    filename: "Sankeerthana Kasi_ECE_MUN.jpg",
    role: "Delegate"
  },
];

const coreTeam = [
  {
    name: "Nikhil Nayak",
    title: "President",
    image: "/MEMBERS/CC Members/Nikhil Nayak.JPG",
  },
  {
    name: "V Koushik",
    title: "Vice President",
    image: "/MEMBERS/CC Members/Koushik.jpg",
  },
  {
    name: "Harsh Ringsia",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/Harsh Ringsia.jpg",
  },
  {
    name: "Aditi Maktedar",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/Aditi Maktedar.jpg",
  },
  {
    name: "Vamshi Ganesh",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/vamshi formal .png",
  },
  {
    name: "Tasmiya Afreen",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/Tasmiya.jpg",
  },
  {
    name: "Shivam Sharma",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/shivam.jpg",
  },
  {
    name: "Druthi TY",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/Druthi TY.jpg",
  },
  {
    name: "Vivek D Vagale",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/Vivek.jpg",
  },
  {
    name: "Aditi Revankar",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/Aditi Revankar.jpg",
  },
  {
    name: "Anagha MR",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/Anagha MR.jpg",
  },
  {
    name: "Varshini",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/Varshini.jpg",
  },
  {
    name: "Nihal N",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/Nihal N(Aiml).jpg",
  },
  {
    name: "Adith D H",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/Adith D H (ECE A SEM 1).jpg",
  },
  {
    name: "Karthik Prasad M",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/Karthik Prasad M_CS(DS).jpg",
  },
  {
    name: "Zeyan Shahid Khan",
    title: "Core Team Member",
    image: "/MEMBERS/CC Members/Zeyan Shahid Khan (CSE).jpg",
  }
];
const technicalTeam = [
  {
    name: "Bhargavi Gangoor",
    department: "Computer Science (Cyber Security)",
    filename: "BhargaviGangoor_CY (1).jpg",
    role: "Technical Member"
  },
  {
    name: "Shriyanshu Kumar Kaspime",
    department: "Computer Science",
    filename: "ShriyanshuKumarKapsime_CSE(J).jpg",
    role: "Technical Member"
  },
  {
    name: "Rudra Chakraborty",
    department: "Computer Science (AI&ML)",
    filename: "RudraChakraborty_AIML.jpg",
    role: "Technical Member"
  },
];
const photographyTeam = [
  {
    name: "Advika Kirana Banni",
    department: "Computer Science (AI&ML)",
    filename: "Advika Kirana Banni_CSE (1).jpg",
    role: "Photgraphy And Videography Member"
  },
  {
    name: "Nesara S",
    department: "Electronics and Communication Engineering",
    filename: "NesaraS_ECE.png",
    role: "Photgraphy And Videography Member"
  },
];
const socialMediaTeam = [
  {
    name: "Netra Shivakumar",
    department: "Computer Science (AI&ML)",
    filename: "NetraShivakumar_AIML (1).jpg",
    role: "Social Media Manager"
  },
];
const videoEditingTeam = [
   {
    name: "Yashas P",
    department: "Computer Science (AI&ML)",
    filename: "YashasP_AIML.png",
    role: "Editor"
  },
];
const contentWritingTeam = [
  {
    name: "Anantha Narayan R Prabhu",
    department: "Computer Science",
    filename: "Anantha Narayan_CSE.jpg",
    role: "Content Writer"
  },
  {
    name: "Sankeerthana Kasi",
    department: "Electronics and Communication Engineering",
    filename: "Sankeerthana Kasi_ECE_MUN.jpg",
    role: "Content Writer"
  },
  {
    name: "Samarth G Joshi",
    department: "Computer Science",
    filename: "Samarth g joshi CSE I.jpeg",
    role: "Content Writer"
  },
  {
    name: "Poorvika Nagaraj",
    department: "Computer Science",
    filename: "Poorvika Nagaraj _Cse (1).jpg",
    role: "Content Writer"
  },

];




const CommitteeSection = ({ title, iconColor, members, folder }) => {
  if (!members.length) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-primary/5 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className={`inline-flex items-center space-x-2 bg-${iconColor}/10 rounded-full px-4 py-2 mb-4 border border-${iconColor}/20`}>
            <Sparkles className={`h-5 w-5 text-${iconColor}`} />
            <span className={`text-${iconColor} font-semibold uppercase tracking-wide text-sm`}>
              {title}
            </span>
          </div>

          <h2 className="section-heading-lusion text-3xl sm:text-4xl lg:text-5xl mb-4">
            {title}
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the members who contribute to {title}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {members.map((member, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/20 hover:border-primary/30">

                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={`/MEMBERS/${folder}/${member.filename}`}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 [image-rendering:-webkit-optimize-contrast]"
                        onError={(e) => (e.currentTarget.src = '/mun-logo.jpg')}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>

                    <div className="p-2 sm:p-3">
                      <h3 className="font-inter font-semibold text-xs sm:text-sm leading-tight group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                    </div>

                  </div>
                </div>
              </HoverCardTrigger>

              {/* Hover Popup */}
              <HoverCardContent className="w-72 sm:w-80 p-4 bg-card/95 border border-border/20 shadow-xl backdrop-blur">
                <div className="flex gap-4">

                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow">
                    <img
                      src={`/MEMBERS/${folder}/${member.filename}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}</p>

                    <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                      {member.department}
                    </Badge>
                  </div>

                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

      </div>
    </section>
  );
};


const Members = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="py-12 md:py-20 bg-background">
        {/* Enhanced Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto safe-area-inset-top">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                  Our{" "}
                  <span className="text-gradient-lusion block sm:inline">
                    Members
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-inter leading-relaxed max-w-4xl mx-auto">
                  Meet the passionate individuals who drive excellence in diplomacy and shape the future of global leadership
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12">
                <div className="flex items-center space-x-2 sm:space-x-3 bg-primary/10 backdrop-blur-sm rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border border-primary/20 hover:bg-primary/20 transition-all duration-300">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                  <span className="text-primary font-inter font-semibold text-sm sm:text-base">180+ Active Members</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-primary/10 backdrop-blur-sm rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border border-primary/20 hover:bg-primary/20 transition-all duration-300">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                  <span className="text-primary font-inter font-semibold text-sm sm:text-base">16 Core Leaders</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-primary/10 backdrop-blur-sm rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border border-primary/20 hover:bg-primary/20 transition-all duration-300">
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                  <span className="text-primary font-inter font-semibold text-sm sm:text-base">Multiple Departments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Committee */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-primary/20">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-primary font-inter font-semibold uppercase tracking-wide text-xs sm:text-sm">Leadership</span>
              </div>
              <h2 className="section-heading-lusion text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
                Core Committee
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground font-inter max-w-4xl mx-auto leading-relaxed">
                Dedicated leaders who guide our society with vision, passion, and commitment to excellence in diplomatic education
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {coreTeam.map((member, index) => (
                <div key={index} className="group relative">
                  <div className="card-lusion bg-card hover:border-primary/30 hover:shadow-[0_0_40px_hsl(var(--primary)_/_0.1)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                    
                    <div className="aspect-[4/5] relative overflow-hidden rounded-t-2xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                        <Badge className="bg-primary/90 text-primary-foreground font-semibold px-2 sm:px-3 py-1 shadow-lg text-xs sm:text-sm">
                          Core Team
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6 space-y-2">
                      <div className="space-y-1 sm:space-y-2">
                        <h3 className="font-inter text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-primary font-inter font-semibold text-xs sm:text-sm uppercase tracking-wider">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

         {/* DELEGATION TEAM */}
        <CommitteeSection
          title="Delegation Team"
          iconColor="accent"
          members={delegationMembers}
          folder="delegation"
        />


        {/* NEW TEAM SECTIONS */}
        <CommitteeSection title="Technical Committee" iconColor="primary" members={technicalTeam} folder="technical" />
        <CommitteeSection title="Photography and Videography Committee" iconColor="accent" members={photographyTeam} folder="photography" />
        <CommitteeSection title="Social Media Committee" iconColor="secondary" members={socialMediaTeam} folder="social-media" />
        <CommitteeSection title="Video Editing Team" iconColor="primary" members={videoEditingTeam} folder="video-editing" />
        <CommitteeSection title="Content Writing Committee" iconColor="accent" members={contentWritingTeam} folder="content-writing" />


        {/* Join Us Section */}
        <section className="py-12 md:py-16 relative overflow-hidden safe-area-inset-bottom">
          {/* Clean gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
          
          {/* Single elegant wave */}
          <div className="absolute inset-0 opacity-[0.07] overflow-hidden">
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path 
                fill="hsl(var(--primary))" 
                d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,154.7C840,139,960,117,1080,122.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                className="animate-wave"
              />
            </svg>
          </div>
          
          {/* Subtle ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="font-inter text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
                  Ready to Join Our{" "}
                  <span className="text-gradient-lusion">
                    Diplomatic Family?
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Be part of a dynamic community where diplomacy meets innovation.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="btn-lusion group/btn" onClick={() => navigate("/contact")}>
                  <span>Join Today</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="btn-lusion-outline" onClick={() => navigate("/about")}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Members;