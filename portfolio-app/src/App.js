import ProjectLink from "./ProjectLink";
import { HashLink } from "react-router-hash-link";

import ACC_MAT from "./images/accMat.png";
import CHESS from "./images/chess.png";
import HEADSHOT from "./images/Headshot.png";

import RESUME from "./images/resume.pdf";

import GithubLogo from "./images/GithubLogo";
import EmailIcon from "./images/EmailIcon";
import LinkedInIcon from "./images/LinkedInIcon";
import MobileNav from "./MobileNav";

export default function App() {
    return (
        <div id="home">
            <header>
                <a>Ryan Kustaborder</a>
                <div>
                    <a>Projects</a>
                    <a>Gallery</a>
                    <a>Resume</a>
                    <a>Contact</a>
                </div>
            </header>

            <div id="content" className="grid">
                <h1 className="span--5">Hello!</h1>
                <p className="span--3">
                    Lörem ipsum plutoid hyberavdrag, respektive spökgarn.
                    Mansskatt. Sprejgodis gigavir. Tvåmetersregeln blingbling
                    skimma. Rit-avdrag bjästa säg att Lasse Berghagen-vin
                    cancelkultur. Koscheria klämspärr skynka Odellplatta.
                    Ikeamonarki blixad helikoptermamma. Kameratelefon plutoid
                    Maudeffekten. Terrorresa e-krona whataboutism. Twerka
                    asymmetrisk krigföring.
                </p>
                <p className="span--3">
                    Petabyte solflygteknik och guldomat spetspatient. Bonus
                    malus receptmotionär. Trer kringmyndighet, klimatsäkra
                    klustersmitta. Hackathon finanssmälta stadsspret.
                    Antivaxxare kulturkofta medan läxrut bekymringssamtal Lasse
                    Berghagen-vin. Det mörka nätet inbäddad journalist
                    kulturkofta. Kroppsskanning annonsblockerare om tjejkött.
                    Cringe ögonkramp kubtest, vobba ifall Lasse Berghagen-vin.
                    Självkarantän blogga enveckasförsvar att arabisk vår. Skimma
                    plånboksbröllop alternativa fakta robotjournalistik.
                </p>

                <h2 className="span--5">Featured Projects</h2>

                {/* First Project*/}
                <div className="image span--3"></div>
                <div className="project-description span--2">
                    <h3>Immersiv Mobilroman</h3>
                    <p>
                        Lörem ipsum nätbingo pappafeminist. Nätläkare e-krona
                        hotelljournalist. Pansexuell morotsaktivism. Kulturkofta
                        novellix. Mansplaining prehab. Fidget spinner virtuell
                        våldtäkt. Plutoid kalkstenssångare.
                    </p>
                    <p>
                        Rocka fett trekvartspudel. Plånboksbröllop krympflation.
                        Gubbploga förnedringsrån attefallshus hedersvåld
                        hundvissla. Mandatpingis terapeutisk kloning betalblogg.
                        Kjolprotest cosplay och hemester förpackningsfri.
                        Kreativ skolgång Gretaeffekten framtidsfullmakt. Följare
                        cosplay krisväska blåkort. Du kan vara drabbad.
                    </p>
                    <div className="icon-link">
                        <div className="icon"></div>
                        <a>Check It Out</a>
                    </div>
                    <div className="icon-link">
                        <div className="icon"></div>
                        <a>Read More</a>
                    </div>
                </div>

                {/* First Project*/}
                <div className="project-description span--2">
                    <h3>Immersiv Mobilroman</h3>
                    <p>
                        Lörem ipsum nätbingo pappafeminist. Nätläkare e-krona
                        hotelljournalist. Pansexuell morotsaktivism. Kulturkofta
                        novellix. Mansplaining prehab. Fidget spinner virtuell
                        våldtäkt. Plutoid kalkstenssångare.
                    </p>
                    <p>
                        Rocka fett trekvartspudel. Plånboksbröllop krympflation.
                        Gubbploga förnedringsrån attefallshus hedersvåld
                        hundvissla. Mandatpingis terapeutisk kloning betalblogg.
                        Kjolprotest cosplay och hemester förpackningsfri.
                        Kreativ skolgång Gretaeffekten framtidsfullmakt. Följare
                        cosplay krisväska blåkort. Du kan vara drabbad.
                    </p>
                    <div className="icon-link">
                        <div className="icon"></div>
                        <a>Check It Out</a>
                    </div>
                    <div className="icon-link">
                        <div className="icon"></div>
                        <a>Read More</a>
                    </div>
                </div>
                <div className="image span--3"></div>
            </div>
        </div>
    );
}
