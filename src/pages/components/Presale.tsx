
import React from 'react'
import styled from 'styled-components'

import Card from '../../components/Card'
import CardContent from '../../components/CardContent'
import Label from '../../components/Label'
import Spacer from '../../components/Spacer'


import xLuas from './../../assets/img/cfi-icon.png'
import image from './../../assets/img/qr.png'



const Presale = () => {

    return (
        (<StyledWrapper>
            <Card>
                <CardContent>
                    <StyledPresales>
                        <StyledPresale>
                            {/* <SushiIcon /> */}
                            <img src={xLuas} alt="CFI Balance" />
                            <Spacer />
                            <div style={{ flex: 1 }}>
                                <Label text="CFI Presale" />
                                <StyledPresaleLink
                                    href="https://etherscan.io/token/0x29e6d4a5be018d3809a72ddab8d09285d42a169b"
                                    rel="noreferrer noopner"
                                    target="_blank"
                                >CFI Token Contract</StyledPresaleLink>
                                <br></br>
                                Oct 21 - 25, 2020
                            </div>
                            <Spacer />
                            <img src={xLuas} alt="CFI Balance" />
                        </StyledPresale>
                    </StyledPresales>
                </CardContent>
                <Footnote>
                <StyledInsight>
                        Price:
                        <br></br>
                        <h3>Day 1-3</h3>
                        <span style={{ fontWeight: 'bold', color: '#e30e63' }}>
                            <><b>0.0075 ETH</b> </>
                        </span>
                        <br></br>
                        <h3>Day 4-5</h3>
                        <span style={{ fontWeight: 'bold', color: '#e30e63' }}>
                            <><b>0.01 ETH</b> </>
                        </span>
                </StyledInsight>    
          <FootnoteValue>
                      
          </FootnoteValue>
          <br></br>

                    <StyledInsight>
                        Limits:
                        <br></br>
                        <h3>Min</h3>
                        <span style={{ fontWeight: 'bold', color: '#e30e63' }}>
                            <><b>0.15 ETH</b> </>
                        </span>
                        <br></br>
                        <h3>Max</h3>
                        <span style={{ fontWeight: 'bold', color: '#e30e63' }}>
                            <><b>2 ETH</b> </>
                        </span>
                    </StyledInsight>
                    <br></br>
                    <StyledInsight>
                        <Spacer />
                            <div style={{ flex: 1 }}>
                                <h3>Send only ETH to 0x40015E90E500d6E9B6768A887E0537297485D198</h3>
                                <br></br>
                                <h3>or scan QR code below</h3>
                                <br></br>
                                <StyledImg>
                                    <img className="d-md-none" src={image} height="300" style={{ marginTop: -4 }} alt='qr' />
                                </StyledImg>
                            </div>
                            <Spacer />
                    </StyledInsight>
                </Footnote>
                <br></br>
            </Card>
            <Spacer />
        
            <br></br>
            
        </StyledWrapper>)
        
    )
}

const StyledImg = styled.div`
    .d-md-none {
        @media (max-width: 1024px) {
            display: none;
        }
    }
    .d-lg-none {
        @media (min-width: 1025px) {
            display: none;
        }
    }
`

const Footnote = styled.div`
  font-size: 30px;
  padding: 14px 20px;
  color: ${(props) => props.theme.color.grey[100]};
  background-color: ${(props) => props.theme.color.grey[300]};
`
const FootnoteValue = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  float: right;
  color: ${(props) => props.theme.color.white};
`
const StyledInsight = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 8px;
  background: transparent;
  color: #9E9E9E;
  width: 100%;
  line-height: 25px;
  font-size: 13px;
  border: 0px solid #e6dcd5;
  text-align: center;
`

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`

const StyledPresales = styled.div`
  display: flex;
`
const StyledPresaleLink = styled.a`
  font-weight: 600;
  font-size: 0.825rem;
  color: ${(props) => props.theme.color.grey[400]};
`
const StyledPresale = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export default Presale
