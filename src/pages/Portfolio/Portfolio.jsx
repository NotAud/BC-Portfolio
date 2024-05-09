import "./Portfolio.css";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import Section from "../../components/Section/Section";

export default function AboutMe() {
    return (
        <Section title="Portfolio">
            <div className="portfolio-items">
                <PortfolioItem title="Oroboros Autoclicker" href="https://github.com/NotAud/Oroboros" image="https://github.com/NotAud/Oroboros/raw/master/app-preview.png" />
                <PortfolioItem title="Pigeon Messenger" href="https://github.com/NotAud/pigeon-messenger" image="https://camo.githubusercontent.com/96ec77380a86e1b346e3ce637f93e9a62c5a5d639431b6cc93cc97741d4b27e5/68747470733a2f2f696d6775722e636f6d2f4c5358413863732e706e67" />
                <PortfolioItem title="Movie Hunt" href="https://github.com/NotAud/movie-hunt" image="https://camo.githubusercontent.com/5a4cd07978b18f0e6e12093d59748c45683199958ab647208a4d470a551e1a2c/68747470733a2f2f696d6775722e636f6d2f6c31484164624f2e706e67" />
            </div>
        </Section>
    );
}