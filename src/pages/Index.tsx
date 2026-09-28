import { useState } from "react";

import { features } from "@/lib/holo-data";

import { BackgroundImage } from "@/components/hud/BackgroundImage";
import { AuroraCanvas } from "@/components/hud/AuroraCanvas";
import { GridOverlay } from "@/components/hud/GridOverlay";
import { AtmosphereOverlay } from "@/components/hud/AtmosphereOverlay";
import { ReticleCursor } from "@/components/hud/ReticleCursor";
import { TopBar } from "@/components/hud/TopBar";
import { HeroCard } from "@/components/hud/HeroCard";
import { FeatureCard } from "@/components/hud/FeatureCard";
import { MembersCard } from "@/components/hud/MembersCard";
import { IndicatorsCard } from "@/components/hud/IndicatorsCard";
import { JoinModal } from "@/components/hud/JoinModal";
import { LoginModal } from "@/components/hud/LoginModal";
import { UploadModal } from "@/components/hud/UploadModal";

const Index = () => {
  const [joinOpen, setJoinOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);

  const openJoin = () => setJoinOpen(true);
  const openLogin = () => setLoginOpen(true);
  const openUpload = () => setUploadOpen(true);

  return (
    <div className="app-shell relative flex min-h-screen flex-col">
      <BackgroundImage />
      <AuroraCanvas />
      <GridOverlay />
      <AtmosphereOverlay />
      <ReticleCursor />

      <TopBar onLogin={openLogin} onJoin={openJoin} />

      <main className="bento-main relative z-10 flex-1 min-h-0 px-4 pb-6 pt-4 sm:px-6 lg:px-10 lg:pb-8 lg:pt-5">
        <div className="bento-root mx-auto grid max-w-[1600px] grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          <HeroCard />

          <div className="bento-mini grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {features.map((feature, i) => (
              <FeatureCard key={feature.code} feature={feature} index={i + 1} />
            ))}

            <MembersCard
              index={features.length + 1}
              onLogin={openLogin}
              onUpload={openUpload}
            />

            <IndicatorsCard index={features.length + 2} />
          </div>
        </div>
      </main>

      <JoinModal open={joinOpen} onOpenChange={setJoinOpen} />
      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
      <UploadModal open={uploadOpen} onOpenChange={setUploadOpen} />
    </div>
  );
};

export default Index;
