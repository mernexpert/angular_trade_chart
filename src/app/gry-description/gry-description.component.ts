import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gry-description',
  templateUrl: './gry-description.component.html',
  styleUrls: ['./gry-description.component.css']
})
export class GryDescriptionComponent implements OnInit {

  gry_en_description: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  logo: string;
  logo_url: string;


  constructor(private router: Router) { }

  ngOnInit() {
    switch (this.router.url) {
      case "/gry/en":
        this.title1 = "GRAYLL Intelligence generates exponential profits automatically—accessible via a simple App.";
        this.title2 = "Trading and investing can be difficult, stressful and time consuming — GRAYLL aims to eliminate these aspects.";
        this.description1 = "GRY is the Reference Value of GRAYLL's <strong><i>3xMagi</i></strong> algorithms — Balthazar, Kaspar and Melkior. The <strong><i>GRY Reference Value</i></strong> shows the weighted average performance of all algorithmic positions that are open at any point in time. Currently, <strong><i>GRAYLL Intelligence</i></strong> is actively maneuvering 4 trading pairs: BTCusd, LTCusd, ETHusd, XRPusd in 19 different markets(exchanges) simultaneously. The performance of GRY is also related to the price of Gold(XAU), this provides an additional hedge against global currency inflation."
        this.description2 = "<strong><i>GRAYLL Intelligence </i></strong>is fully automated with AI, Machine Learning and Artificial Neural Networks. <strong><i>GRAYLL 3xMagi </i></strong>algorithms can capitalize on opportunities in any market trend — bull, bear and sideways. More importantly, the beneficial aspects of these data sciences are less human stress, more free time & higher profits. Our aim is to provide users with simplicity, low skill requirements and minimal time commitments. The <strong><i>GRAYLL App </i></strong>enables people to create freedom, prosperity & wealth without trading time for income."
        this.logo = "assets/logos/kaiko-logo.png";
        this.logo_url = "https://www.kaiko.com/";
        break;
      case "/grz/en":
        this.title1 = "GRAYLL Intelligence generates exponential profits automatically — accessible via a simple App.";
        this.title2 = "Trading and investing can be difficult, stressful and time consuming — GRAYLL aims to eliminate these aspects.";
        this.description1 = "GRZ is the Reference Value of GRAYLL's <strong><i>Arkady</i></strong> algorithm. <strong><i>Arkady</i></strong> is a perpetual algorithm that performs according to the real-time value of the 7 major global fiat currency trading pairs — EURusd, JPYusd, GBPusd, CHFusd, AUDusd, CADusd and CNYusd. The performance of <strong><i>Arkady</i></strong> is also related to Consumer Price Inflation (CPI), the increasing US Unfunded Liabilities (debt obligations) and growing interest payments on US Government debt and exposure to Bitcoin (BTCusd).";
        this.description2 = "<strong><i>GRAYLL Intelligence </i></strong>is fully automated with AI, Machine Learning and Artificial Neural Networks. <strong><i>Arkady </i></strong>hedges against consumer price inflation, global currency devaluation, and provides high returns compared to saving accounts. GRZ might be a sensible replacement for Government or Corporate pensions, GRZ can be used for de-risking any investment portfolio including traditional holdings such as shares & ETFs as global financial markets are facing declining trends.";
        this.logo = "assets/logos/polygon-logo.jpg";
        this.logo_url = "https://polygon.io/";
         break;
      case "/gry/tr":
        this.title1 = "GRAYLL zekâsı, otomatik üstel kârlar üretir ve kolay bir App ile erişilebilirdir.";
        this.title2 = "Ticaret ve yatırım yapmak zor, stresli ve zaman alıcı olabilir. GRAYLL, bu olumsuzlukları ortadan kaldırmayı amaçlamaktadır.";
        this.description1 = "GRY, GRAYLL'ın <strong><i>3xMagi</i></strong>-Balthazar, Kaspar, Melkior- algoritmalarının referans değeridir. GRY referans fiyatı, herhangi bir zamanda açık olan tüm algoritmik pozisyonların ağırlıklı ortalama performansını gösterir. Şu anda, <strong><i>GRAYLL zekâsı</i></strong>, 19 farklı dijital varlık borsasında, 4 merkezi olmayan dijital varlık paritesi -BTCusd, LTCusd, ETHusd, XRPusd- üzerinde otomatik işlemler gerçekleştiriyor. GRY'nin performansı Altın (XAU) fiyatıyla da ilgilidir, bu ilişki küresel para enflasyonuna karşı ek bir korunma sağlar.";
        this.description2 = "Yapay zeka, makine öğrenimi ve yapay sinir ağları ile tamamen otomatik olan <strong><i>GRAYLL zekasının 3xMagi</i></strong> algoritmaları, herhangi bir piyasa trendindeki -boğa, ayı ve yatay- fırsatlardan yararlanabilir. Daha da önemlisi, kullandığımız veri bilimi disiplinleriyle stres ve psikolojik baskıyı minimalize ediyorken, daha fazla boş zaman ve daha yüksek yatırım dönüşü sağlıyoruz. Amacımız, kullanıcılarımıza kolaylık, düşük beceri gereksinimleri ve maksimum zaman tasarrufuyla yüksek kâr, özgürlük ve servet başlangıcı sağlayan bir uygulama sunmaktır.";
        this.logo = "assets/logos/kaiko-logo.png";
        this.logo_url = "https://www.kaiko.com/";
        break;
      default:
        this.title1 = "GRAYLL zekâsı, otomatik üstel kârlar üretir ve kolay bir App ile erişilebilirdir.";
        this.title2 = "Ticaret ve yatırım yapmak zor, stresli ve zaman alıcı olabilir. GRAYLL, bu olumsuzlukları ortadan kaldırmayı amaçlamaktadır.";
        this.description1 = "GRZ, GRAYLL'in <strong><i>Arkady</i></strong> algoritmasının referans değeridir. <strong><i>Arkady</i></strong> algoritması 7 büyük küresel fiat paritesi -EURusd, JPYusd, GBPusd, CHFusd, AUDusd, CADusd ve CNYusd- üzerinde gerçek zamanlı değerlere göre performans gösteren daimi bir algoritmadır. <strong><i>Arkady'</i></strong>nin performansı, Tüketici Fiyat Enflasyonu, artan ABD Fonlanmamış Yükümlülükleri (borç yükümlülükleri), ABD Hükümeti borçlarının artan faiz ödemeleri ile ilişkilidir ve Bitcoin'e maruz kalmayı kapsar.";
        this.description2 = "Yapay zeka, makine öğrenmesi, derin öğrenme ve yapay sinir ağları gibi teknolojilerle tamamen otomatik olan <strong><i>GRAYLL zekasının Arkady</i></strong> algoritması, enflasyona, küresel döviz devalüasyonu karşı koruma; tasarruf hesaplarına göre yüksek kar getirisi sağlar. Arkady, emeklilik fonları için mantıklı bir ikamedir. GRZ algoritmaları, hisse senetleri, bonolar ve ETF gibi geleneksel varlıkları içerebilecek herhangi bir yatırım portföyünün riskini azaltmak için de kullanılabilir.";
        this.logo = "assets/logos/polygon-logo.jpg";
        this.logo_url = "https://polygon.io/";
      // code block
    }
  }

}
