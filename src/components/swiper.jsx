import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, EffectCube } from 'swiper'
import 'swiper/swiper-bundle.css'
import Title from '../components/normalText'
import Fonted from '../components/editedFontText'

SwiperCore.use([Navigation, Pagination, EffectCube])

function SwiperComponent({ capitalizeNames,
    getArrays, 
    getAbilitiesInEnglish, 
    getTypesStats, 
    pokemonData, 
    typesToBeCapitalized, 
    allTypesVerifier, 
    allTypesStylized, 
    abilitiesToBeCapitalized, 
    abilitiesTXT, 
    getDoubleDamageFrom, 
    getDoubleDamageTo, 
    getHalfDamageFrom, 
    getHalfDamageTo, 
    getNoDamageFrom, 
    getNoDamageTo }) {
    return (
        <div className="swiperContainer">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                effect="cube"
            >
                <SwiperSlide>
                    {pokemonData.data && pokemonData.data.map((item, index) => {
                        let pokemonId = item.id.toString();
                        if (pokemonId.length === 2) {
                            pokemonId = `0${pokemonId}`;
                        }
                        if (pokemonId.length === 1) {
                            pokemonId = `00${pokemonId}`;
                        }
                        return <img key={index} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`} alt="Pokemon"></img>
                    })}
                </SwiperSlide>
                <SwiperSlide style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    {pokemonData.data && pokemonData.data.map((item, index) => {
                        getArrays()
                        typesToBeCapitalized.forEach((value, upper) => {
                            allTypesVerifier.forEach((type, index) => {
                                if (typesToBeCapitalized[upper] == allTypesVerifier[index]) {
                                    typesToBeCapitalized.splice(upper, 1, allTypesStylized[index])
                                }
                            })
                        })
                        return (
                            <div style={{ wordSpacing: '5px' }}>
                                <Title key={index} title="Name" description={capitalizeNames([item.name])}></Title>
                                <Title title="Type" description={typesToBeCapitalized.map((type, index) => {
                                    if (index == 0) {
                                        if (typesToBeCapitalized.length == 1) {
                                            return (
                                                <span>{type}</span>
                                            )
                                        }
                                        return (
                                            <>
                                                <span style={{ paddingRight: "12px" }}>{type}</span>
                                                <span>|</span>
                                            </>
                                        )
                                    }
                                    return (
                                        <span style={{ paddingLeft: "12px" }}>{type}</span>
                                    )
                                })}></Title>
                                <Title title="Ability" description={capitalizeNames(abilitiesToBeCapitalized).join().replace(/(,)/g, ' | ')}></Title>
                            </div>
                        )
                    })}
                </SwiperSlide>
                <SwiperSlide style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }
                } >
                    <div style={{ margin: "10px", textAlign: 'center', lineHeight: "140%" }}>
                        {pokemonData.abilities && pokemonData.abilities.map((item, index) => {
                            getAbilitiesInEnglish()
                            return (
                                <>
                                    <p key={index}>{capitalizeNames([abilitiesToBeCapitalized[index]])}: {abilitiesTXT[index]}</p>
                                    <br />
                                </>
                            )
                        })}</div>
                </SwiperSlide>
                <SwiperSlide style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }
                } >
                    {
                        pokemonData.data && pokemonData.data.map((item, index) => {
                            getTypesStats()
                            const setDoubleDamageTo = [...new Set(getDoubleDamageTo)]
                            const setHalfDamageTo = [...new Set(getHalfDamageTo)]
                            const setNoDamageTo = [...new Set(getNoDamageTo)]
                            let toIntersections = setHalfDamageTo.filter(types => setDoubleDamageTo.includes(types))
                            for (let i = 0; i < toIntersections.length; i++) {
                                if (!toIntersections == '') {
                                    let typeIndex = setHalfDamageTo.indexOf(toIntersections[i]);
                                    setHalfDamageTo.splice(typeIndex, 1);
                                    toIntersections.shift();
                                    i--
                                }
                            }
                            let noDamageHalfToIntersections = setHalfDamageTo.filter(types => setNoDamageTo.includes(types));
                            for (let i = 0; i < noDamageHalfToIntersections.length; i++) {
                                if (!noDamageHalfToIntersections == '') {
                                    let typeIndex = setHalfDamageTo.indexOf(noDamageHalfToIntersections[i]);
                                    setHalfDamageTo.splice(typeIndex, 1);
                                    noDamageHalfToIntersections.splice(i, 1);
                                    i--
                                }
                            }
                            let noDamageDoubleToIntersections = setDoubleDamageTo.filter(types => setNoDamageTo.includes(types));
                            for (let i = 0; i < noDamageDoubleToIntersections.length; i++) {
                                if (!noDamageDoubleToIntersections == '') {
                                    let typeIndex = setDoubleDamageTo.indexOf(noDamageDoubleToIntersections[i]);
                                    setDoubleDamageTo.splice(typeIndex, 1);
                                    noDamageDoubleToIntersections.splice(i, 1);
                                    i--
                                }
                            }

                            setDoubleDamageTo.forEach((value, upper) => {
                                allTypesVerifier.forEach((type, index) => {
                                    if (setDoubleDamageTo[upper] == allTypesVerifier[index]) {
                                        setDoubleDamageTo.splice(upper, 1, allTypesStylized[index])
                                    }
                                })
                            })
                            setHalfDamageTo.forEach((value, upper) => {
                                allTypesVerifier.forEach((type, index) => {
                                    if (setHalfDamageTo[upper] == allTypesVerifier[index]) {
                                        setHalfDamageTo.splice(upper, 1, allTypesStylized[index])
                                    }
                                })
                            })
                            setNoDamageTo.forEach((value, upper) => {
                                allTypesVerifier.forEach((type, index) => {
                                    if (setNoDamageTo[upper] == allTypesVerifier[index]) {
                                        setNoDamageTo.splice(upper, 1, allTypesStylized[index])
                                    }
                                })
                            })
                            return (
                                <div style={{ lineHeight: "90%" }}>
                                    <Fonted title="Double Damage To" description={
                                        setDoubleDamageTo.map(it => {
                                            return <span style={{ padding: "0.15em" }}>{it}</span>
                                        })
                                    }></Fonted>

                                    <Fonted title="Half Damage To" description={
                                        setHalfDamageTo.map(it => {
                                            return (
                                                <span style={{ padding: "0.15em" }}>{it}</span>
                                            )
                                        })
                                    }></Fonted>
                                    <Fonted title="No Damage To" description={
                                        setNoDamageTo.map(it => {
                                            return (
                                                <span style={{ padding: "0.15em" }}>{it}</span>
                                            )
                                        })
                                    }></Fonted>
                                </div>
                            )
                        })
                    }
                </SwiperSlide>
                <SwiperSlide style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }
                } >
                    {
                        pokemonData.data && pokemonData.data.map((item, index) => {
                            getTypesStats()
                            const setDoubleDamageFrom = [...new Set(getDoubleDamageFrom)]
                            const setHalfDamageFrom = [...new Set(getHalfDamageFrom)]
                            const setNoDamageFrom = [...new Set(getNoDamageFrom)]
                            let noDamageDoubleFromIntersections = setDoubleDamageFrom.filter(types => setNoDamageFrom.includes(types));
                            for (let i = 0; i < noDamageDoubleFromIntersections.length; i++) {
                                if (!noDamageDoubleFromIntersections == '') {
                                    let typeIndex = setDoubleDamageFrom.indexOf(noDamageDoubleFromIntersections[i]);
                                    setDoubleDamageFrom.splice(typeIndex, 1);
                                    noDamageDoubleFromIntersections.splice(i, 1);
                                    i--
                                }
                            }
                            let noDamageHalfFromIntersections = setHalfDamageFrom.filter(types => setNoDamageFrom.includes(types));
                            for (let i = 0; i < noDamageHalfFromIntersections.length; i++) {
                                if (!noDamageHalfFromIntersections == '') {
                                    let typeIndex = setHalfDamageFrom.indexOf(noDamageHalfFromIntersections[i]);
                                    setHalfDamageFrom.splice(typeIndex, 1);
                                    noDamageHalfFromIntersections.splice(i, 1);
                                    i--
                                }
                            }
                            let fromIntersections = setHalfDamageFrom.filter(types => setDoubleDamageFrom.includes(types));
                            for (let i = 0; i < fromIntersections.length; i++) {
                                if (!fromIntersections == '') {
                                    let typeIndex = setHalfDamageFrom.indexOf(fromIntersections[i]);
                                    setHalfDamageFrom.splice(typeIndex, 1);
                                    fromIntersections.splice(i, 1);
                                    i--
                                }
                            }
                            setDoubleDamageFrom.forEach((value, upper) => {
                                allTypesVerifier.forEach((type, index) => {
                                    if (setDoubleDamageFrom[upper] == allTypesVerifier[index]) {
                                        setDoubleDamageFrom.splice(upper, 1, allTypesStylized[index])
                                    }
                                })
                            })
                            setHalfDamageFrom.forEach((value, upper) => {
                                allTypesVerifier.forEach((type, index) => {
                                    if (setHalfDamageFrom[upper] == allTypesVerifier[index]) {
                                        setHalfDamageFrom.splice(upper, 1, allTypesStylized[index])
                                    }
                                })
                            })
                            setNoDamageFrom.forEach((value, upper) => {
                                allTypesVerifier.forEach((type, index) => {
                                    if (setNoDamageFrom[upper] == allTypesVerifier[index]) {
                                        setNoDamageFrom.splice(upper, 1, allTypesStylized[index])
                                    }
                                })
                            })
                            return (
                                <div style={{ lineHeight: "90%" }}>
                                    <Fonted title="Double Damage From" description={
                                        setDoubleDamageFrom.map(it => {
                                            return (
                                                <span style={{ padding: "0.15em" }}>{it}</span>
                                            )
                                        })
                                    }></Fonted>
                                    <Fonted title="Half Damage From" description={
                                        setHalfDamageFrom.map(it => {
                                            return (
                                                <span style={{ padding: "0.15em" }}>{it}</span>
                                            )
                                        })
                                    }></Fonted>
                                    <Fonted title="No Damage From" description={
                                        setNoDamageFrom.map(it => {
                                            return (
                                                <span style={{ padding: "0.15em" }}>{it}</span>
                                            )
                                        })
                                    }></Fonted>
                                </div>
                            )
                        })
                    }
                </SwiperSlide>
            </Swiper>
        </div>)
}

export default SwiperComponent