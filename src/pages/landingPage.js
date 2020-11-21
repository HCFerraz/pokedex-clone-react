import React, { Fragment, useState, useEffect } from 'react'
import '../styles/landing.css'
import axios from 'axios'
import { allTypesVerifier, allTypesStylized } from '../services/arrayOfStyles'
import SwiperComponent from '../components/swiper'

function LandingPage() {

    const [pokemonData, setPokemonData] = useState({ data: null, abilities: null, types: null })
    const [pokemonID, setPokemonID] = useState('')
    const [changeLog, setChangeLog] = useState(0)

    useEffect(() => {
        const getPokemonData = async () => {
            try {
                const pkmData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
                const requestTypes = pkmData.data.types.map(response => {
                    return axios.get(response.type.url)
                })
                const promisseAllTypes = await Promise.all(requestTypes)
                const saveTypesData = promisseAllTypes.map(item => {
                    return item.data
                })
                const requestAbilities = pkmData.data.abilities.map(response => {
                    return axios.get(response.ability.url)
                })
                const promisseAllAbilities = await Promise.all(requestAbilities)
                const saveAbilitiesData = promisseAllAbilities.map(item => {
                    return item.data
                })
                setPokemonData({ data: [pkmData.data], abilities: saveAbilitiesData, types: saveTypesData })
            } catch (error) {
                console.log(error)
            }
        }
        getPokemonData()

    }, [changeLog])

    const abilitiesToBeCapitalized = []
    const typesToBeCapitalized = []
    const getDoubleDamageFrom = []
    const getDoubleDamageTo = []
    const getHalfDamageFrom = []
    const getHalfDamageTo = []
    const getNoDamageFrom = []
    const getNoDamageTo = []
    const abilitiesTXT = []

    const handleChange = (e) => {
        setPokemonID(e.target.value.toLowerCase())
    }
    const capitalizeNames = namesArray => namesArray
        .map(eachName => eachName
            .split(' ').map(word => word[0]
                .toUpperCase() + word.slice(1).toLowerCase()).join(' '));

    const getArrays = () => {
        pokemonData.data[0].abilities.forEach(object => {
            abilitiesToBeCapitalized.push(object.ability.name)
        })
        pokemonData.data[0].types.forEach(object => {
            typesToBeCapitalized.push(object.type.name)
        })
    }
    const getAbilitiesInEnglish = () => {
        pokemonData.abilities.forEach(item => {
            item.effect_entries.forEach(it => {
                if (it.language.name === 'en') {
                    abilitiesTXT.push(it.short_effect)
                }
            })
        })
    }
    const getTypesStats = () => {
        pokemonData.types.forEach(item => {
            item.damage_relations.double_damage_from.forEach(res => {
                getDoubleDamageFrom.push(res.name)
            })
            item.damage_relations.double_damage_to.forEach(res => {
                getDoubleDamageTo.push(res.name)
            })
            item.damage_relations.half_damage_from.forEach(res => {
                getHalfDamageFrom.push(res.name)
            })
            item.damage_relations.half_damage_to.forEach(res => {
                getHalfDamageTo.push(res.name)
            })
            item.damage_relations.no_damage_from.forEach(res => {
                getNoDamageFrom.push(res.name)
            })
            item.damage_relations.no_damage_to.forEach(res => {
                getNoDamageTo.push(res.name)
            })
        })
    }
    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            setChangeLog(changeLog + 1)
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="searchContainer">
                    <img src="https://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png" alt="Pokemon Logo" />
                    <input type="text" placeholder="Name or ID" onChange={e => handleChange(e)} onKeyUp={handleKeyUp} />
                    <button type="submit"><i className="pokeball" onClick={() => setChangeLog(changeLog + 1) }/></button>
                </div>
                <SwiperComponent
                    capitalizeNames={capitalizeNames}
                    getArrays={getArrays}
                    getAbilitiesInEnglish={getAbilitiesInEnglish}
                    getTypesStats={getTypesStats}
                    pokemonData={pokemonData}
                    typesToBeCapitalized={typesToBeCapitalized}
                    allTypesVerifier={allTypesVerifier}
                    allTypesStylized={allTypesStylized}
                    abilitiesToBeCapitalized={abilitiesToBeCapitalized}
                    abilitiesTXT={abilitiesTXT}
                    getDoubleDamageFrom={getDoubleDamageFrom}
                    getDoubleDamageTo={getDoubleDamageTo}
                    getHalfDamageFrom={getHalfDamageFrom}
                    getHalfDamageTo={getHalfDamageTo}
                    getNoDamageFrom={getNoDamageFrom}
                    getNoDamageTo={getNoDamageTo}>
                </SwiperComponent>
            </div>
        </Fragment >
    )
}

export default LandingPage