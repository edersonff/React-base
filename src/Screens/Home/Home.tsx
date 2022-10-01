import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import HalfPage from '../../Components/HalfPage/HalfPage';
import './Home.scss';
import { AiOutlineArrowRight } from "react-icons/ai";
import Section from '../../Components/Section/Section';

function Home({}) {
    return (
        <div className='home-container'>
        <HalfPage height='80%' color='var(--bg)' margin='0'>
            <div className="halfpage-content">
                <div className="half-w flex center resize">
                    <div className="textbox">
                        <p className='p-home'>
                            Ajudamos empresas a crescerem.
                        </p>
                        <h1 className='title-home'>Cresça conosco</h1>
                        <p className='p-home'>
                            Ajudamos empresas a crescerem e se destacarem no mercado.
                        </p>
                    </div>
                    <div className="btns">
                        <Link className='button fill' to='sobre'>
                            <span className="hide">
                                Mais sobre
                            </span> 
                            <AiOutlineArrowRight />
                        </Link>
                        <Link className='button empty' to='sobre'>
                            <span className="hide">
                                Clique aqui
                            </span>
                            <AiOutlineArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
            <img className='background-image' id="home-background" src="https://s3-alpha-sig.figma.com/img/fba6/8b81/56774195c48407265dd2e18e3827f0df?Expires=1664150400&Signature=euNHnxFhskmJng~4mA2Hce263941N8tQLNV78KrDxvNm8dwEK95JAzHeAkS4FSlLE3ulXDYdNbOHdTnFjeIaumSSCjXkvfVfJOvgYyh6gMRMH5a9gvxCgYKFspMzAyaFHr-usaGD0bvS07k2hoePXaVZmT43~6VCDTeUAplmLcs2aurqOsYv8OOqzyterG0WJOprcI0kvVPzClsF-0axheVifHbUBDcX4h2Kj4WhPztB4GwewUngdehu-hlyKl6hhnHhExnLluXBHJkmqa2kwHeqI6hNi9qiNAR1vy2iUBlAVj9mT53fhWZyehziFl6RuM~INmllLfJgTz0Ibe5KSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Imagem de fundo" />
        </HalfPage>
        <Section>
            <div className="content">
                <div className="section-content">
                    <h1 className='title'>TITULO do cont</h1>
                </div>
            </div>
        </Section>
    </div>
    );
}

export default Home;