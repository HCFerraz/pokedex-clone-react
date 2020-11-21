import React from 'react'

export const allTypesVerifier = ['water', 'normal', 'fire', 'electric', 'grass', 'bug',
    'flying', 'fighting', 'ice', 'rock', 'poison', 'psychic', 'ghost', 'dragon',
    'dark', 'steel', 'ground', 'fairy', 'none'];

export const allTypesStylized = [
    <span style={{ background: "#6890F0", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#98D8D8", borderBottomColor: "#807870", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", texShadow: "0px 1px 1px #807870" }}> <span style={{ color: "#F8F8F8" }}>Water</span></span >,
    <span style={{ background: "#A8A878", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#D8D8D0", borderBottomColor: "#705848", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Normal</span></span>,
    <span style={{ background: "#F08030", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#F8D030", borderBottomColor: "#C03028", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Fire</span></span>,
    <span style={{ background: "#F8D030", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#F8F878", borderBottomColor: "#B8A038", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Electric</span></span>,
    <span style={{ background: "#78C850", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#C0F860", borderBottomColor: "#588040", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Grass</span></span>,
    <span style={{ background: "#A8B820", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#D8E030", borderBottomColor: "#A8B820", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Bug</span></span>,
    <span style={{ background: "#A890F0", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#C8C0F8", borderBottomColor: "#705898", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Flying</span></span>,
    <span style={{ background: "#C03028", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#F08030", borderBottomColor: "#484038", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Fighting</span></span>,
    <span style={{ background: "#98D8D8", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#D0F8E8", borderBottomColor: "#9090A0", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Ice</span></span>,
    <span style={{ background: "#B8A038", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#E0C068", borderBottomColor: "#886830", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Rock</span></span>,
    <span style={{ background: "#A040A0", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#D880B8", borderBottomColor: "#483850", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Poison</span></span>,
    <span style={{ background: "#F85888", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#F8C0B0", borderBottomColor: "#789010", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Psychic</span></span>,
    <span style={{ background: "#705898", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#A890F0", borderBottomColor: "#483850", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Ghost</span></span>,
    <span style={{ background: "#7038F8", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#B8A0F8", borderBottomColor: "#483890", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Dragon</span></span>,
    <span style={{ background: "#705848", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#A8A878", borderBottomColor: "#484038", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Dark</span></span>,
    <span style={{ background: "#B8B8D0", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#D8D8C0", borderBottomColor: "#807870", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Steel</span></span>,
    <span style={{ background: "#E0C068", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#F8F878", borderBottomColor: "#886830", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Ground</span></span>,
    <span style={{ background: "#F0B6BC", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#F5CAD1", borderBottomColor: "#905F63", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>Fairy</span></span>,
    <span style={{ background: "#283d3d", borderStyle: "solid none", borderWidth: "1px", borderTopColor: "#2f4f4f", borderBottomColor: "#2f4f4f", borderRadius: "5px", padding: "0.15em", fontSize: "10pt", color: "#F8F8F8", textShadow: "0px 1px 1px #807870" }}><span style={{ color: "#F8F8F8" }}>None</span></span>
]

export default {
    allTypesVerifier,
    allTypesStylized
}