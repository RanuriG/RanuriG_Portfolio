import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    font-family: 'Centra';
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 0px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #0dcaf0;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    width: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role1 = styled.div`
    font-size: 16px;
    font-weight: 600;
    font-family: 'Centra';
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`
const Role2 = styled.div`
    font-size: 16px;
    font-weight: 600;
    font-family: 'Centra';
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Role3 = styled.div `
    font-size: 16px;
    font-weight: 600;
    font-family: 'Centra';
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Role4 = styled.div `
    font-size: 16px;
    font-weight: 600;
    font-family: 'Centra';
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`
const Role5 = styled.div `
    font-size: 16px;
    font-weight: 600;
    font-family: 'Centra';
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 18px;
    font-weight: 500;
    padding-top: 16px;
    color: ${({ theme }) => theme.text_secondary + 99};
    font-family: 'Centra';
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date1 = styled.div`
    font-size: 12px;
    font-weight: 400;
    font-family: 'Centra';
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`
const Date2 = styled.div`
    font-size: 12px;
    font-weight: 400;
    font-family: 'Centra';
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`
const Date3 = styled.div`
    font-size: 12px;
    font-weight: 400;
    font-family: 'Centra';
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Date4 = styled.div`
    font-size: 12px;
    font-weight: 400;
    font-family: 'Centra';
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Date5 = styled.div`
    font-size: 12px;
    font-weight: 400;
    font-family: 'Centra';
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    font-family: 'Centra';
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Company>{experience.company}</Company>
                </Body>
            </Top>
            <Description>
                <Role1>{experience.role1}</Role1>
                <Date1>{experience.date1}</Date1>
                <Role2>{experience.role2}</Role2>
                <Date2>{experience.date2}</Date2>
                <Role3>{experience.role3}</Role3>
                <Date3>{experience.date3}</Date3>
                <Role4>{experience.role4}</Role4>
                <Date4>{experience.date4}</Date4>
                <Role5>{experience.role5}</Role5>
                <Date5>{experience.date5}</Date5>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard