import React from 'react';
import './game-library.theme.css';
import SmallCard from '../small-card/small-card.component';
import BigCard from '../big-card/big-card.component';
import WideCard from '../wide-card/wide-card.component';

export default function GameLibrary() {
  return (
    <div>
      <div className="iconsContainer withMargin">
        <BigCard url="https://redwars22.github.io/Web2/Armadillo/assets/gtavbiglogo.png" />
        <SmallCard url="https://sm.ign.com/t/ign_nordic/cover/p/pes-2020/pes-2020_gyda.1024.jpg" />
        <SmallCard url="https://redwars22.github.io/Web2/Armadillo/assets/gtaiv.png" />
        <SmallCard url="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2PlDL?ver=f3f7&amp;m=6&amp;w=120&amp;h=120&amp;n=t&amp;q=60&amp;o=f" />
        <SmallCard url="https://imgr.search.brave.com/aKHPxIfmoNJ_8Ki7Py_wY4q6u66MGASI2g5ICTuRWoE/fit/900/900/ce/1/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUdGLWw3OU95Nm1x/ZExELUxmR1NNN2FX/aTVuOW5Ob2Q4UEZo/b1ZHdz1zOTAwLW1v/LWMtYzB4ZmZmZmZm/ZmYtcmotay1ubw" />
        <SmallCard url="https://assets1.ignimgs.com/2019/05/30/call-of-duty-modern-warfare---button-01-1559237615728.jpg?width=300" />
        <SmallCard url="https://fontmeme.com/images/Watch-Dogs-Game.jpg" />
      </div>
      <div className="iconsContainer withMargin">
        <WideCard
          url="https://imgr.search.brave.com/WNbKUG1-XVJqiWY1kw8-oBm4VqIKj6LuEKxuBZ6fLiE/fit/1200/900/ce/1/aHR0cHM6Ly9zdGF0/aWMyLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDQv/bmVzLWdhbWVzLTEu/anBn"
          title="Biblioteca de jogos"
        />
        <WideCard
          url="https://imgr.search.brave.com/e6QNxkyrgdrJNe2SqNDgNqif1-lpbNHgkI08Kdv30bk/fit/960/557/ce/1/aHR0cHM6Ly9pMS53/cC5jb20vd3d3LnRo/ZXhib3hodWIuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzAxL2FsbC10aGUt/Y29uc29sZXMuanBn/P2ZpdD05NjAlMkM1/NTcmc3NsPTE"
          title="Comprar consoles"
        />
        <WideCard
          url="https://imgr.search.brave.com/Yst-ga7DdGiO6sfhHlvD7jRSQ5uTT_1oCS5nqE5ljaE/fit/1200/713/ce/1/aHR0cHM6Ly9ibHVl/b2NlYW52aWxsYXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE2LzExL2JsdWVv/Y2VhbnZpbGxhcy1i/bGFjay1mcmlkYXkt/Y2FyaWJiZWFuLXZp/bGxhLXJlbnRhbC1z/YWxlLmpwZw"
          title="Resgatar código promocional"
        />
        <WideCard
          url="https://redwars22.github.io/Web2/Armadillo/assets/thelastofus.jpg"
          title="The Last Of Us"
        />
      </div>
    </div>
  );
}
