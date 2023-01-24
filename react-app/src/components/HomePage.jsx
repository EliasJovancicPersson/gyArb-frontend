import BookPaper from "../images/BookPaper.jpg"
import Logo from "../images/Logo.png"
import Writing from "../images/Writing.jpg"
import "./styles/HomePage.css"

function HomePage(){
    return (
        <div class="container column-center">
		<div class="intro">
			<div class="intro-txt">
				<h2>Har du svårt för gymnasiearbeteet?</h2>
				<p>
					Om du har svårt för ditt gymnasiearbete kan vår hemsida vara en bra
					resurs att använda för att hitta hjälp och stöd. Genom att ladda upp
					ditt arbete på vår hemsida och be om feedback och råd från andra
					studenter och lärare och söka igenom andra gymnasiearbeten för
					inspiration och idéer kan du få hjälp att förbättra ditt arbete och
					hitta lösningar på dina utmaningar.
				</p>
			</div>
			<div class="image">
				<img src={BookPaper}alt="Book and paper" />
			</div>
		</div>
		<div class="intro-tripple">
			<div class="container row-center">
				<div class="image">
					<img src={BookPaper} alt="" />
					<p>
						Ladda upp ditt arbete på vår hemsida och be om feedback och råd
						från andra studenter och lärare
					</p>
				</div>
				<div class="image">
					<img src={BookPaper} alt="" />
					<p>
						Sök igenom andras gymnasiearbeten på våran hemsida för att få
						inspiration och idéer
					</p>
				</div>
				<div class="image">
					<img src={BookPaper} alt="" />
					<p>
						Använd vår hemsida för att hitta olika verktyg och resurser som
						kan hjälpa dig att förbättra ditt arbete
					</p>
				</div>
			</div>
		</div>
		<div class="intro">
			<div class="image">
				<img src={Writing} alt="Book and paper" />
			</div>
			<div class="intro-txt">
				<h2>Vet du inte vad du ska skriva om?</h2>
				<p>
					våran hemsida är en bra resurs för att hitta inspiration och idéer
					till ditt egna gymnasiearbete. Genom att ta del av andra
					gymnasiearbeten och ladda upp ditt egna arbete kan du få en inblick
					i olika ämnen och approacher, och kanske hitta nya perspektiv och
					idéer som kan hjälpa dig att skapa ett lyckat arbete.
				</p>
			</div>
		</div>
		<div class="intro">
			<div class="intro-txt">
				<h2>Får du inte tillräckligt med hjälp?</h2>
				<p>
					Istället för att endast förlita sig på skolan för hjälp med ditt
					gymnasiearbete kan du använda vår hemsida som en extra resurs för
					att få både hjälp och stöd. Du kan till exempel ladda upp ditt
					arbete på vår hemsida och be om feedback och råd från andra
					studenter och lärare. Du kan också söka igenom andra gymnasiearbeten
					för inspiration och idéer.
				</p>
			</div>
			<div class="image">
				<img src={BookPaper} alt="Book and paper" />
			</div>
		</div>
	</div>
    )
}

export default HomePage