
import React from 'react'
import styled from 'styled-components'

import Card from './../../components/Card'
import CardContent from './../../components/CardContent'

import Spacer from './../../components/Spacer'


import xLuas from './../../assets/img/cfi-icon.png'



const Balances = () => {

    return (
        (<StyledWrapper>
            <Card>
                <CardContent>
                    <StyledBalances>
                        <StyledBalance>
                            {/* <SushiIcon /> */}
                            <img src={xLuas} alt="CFI Balance" />
                            <Spacer />
                            <div style={{ flex: 1 }}>
                                CFI
                                <br></br>
                                <StyledBalanceLink
                                    href="https://etherscan.io/token/0x29e6d4a5be018d3809a72ddab8d09285d42a169b"
                                    rel="noreferrer noopner"
                                    target="_blank"
                                >CFI Token Contract</StyledBalanceLink>
                            </div>
                            <Spacer />
                            <img src={xLuas} alt="CFI Balance" />
                        </StyledBalance>
                    </StyledBalances>
                </CardContent>
                <Footnote>
                <StyledInsight>
                        <h3>Total Supply</h3>
                        <span style={{ fontWeight: 'bold', color: '#e30e63' }}>
                            <><b>50000</b> </>
                        </span>
                </StyledInsight>    
          <FootnoteValue>
                      
          </FootnoteValue>
          <br></br>

                    <StyledInsight>
                        <h3>Pre-sale</h3>
                        <span style={{ fontWeight: 'bold', color: '#e30e63' }}>
                            <><b>20000 </b> </>
                        </span>
                    </StyledInsight>
                    <StyledInsight>
                        <h3>Uniswap Liquidity (locked)</h3>
                        <span style={{ fontWeight: 'bold', color: '#e30e63' }}>
                            <><b>5000/Sale Proceeds</b> </>
                        </span>
                    </StyledInsight>
                    <StyledInsight>
                        <h3>Yield Farming</h3>
                        <span style={{ fontWeight: 'bold', color: '#e30e63' }}>
                            <><b>30000</b> </>
                        </span>
                    </StyledInsight>
                    <br></br>
                    <StyledInsight>
                        <h3>Team</h3>
                        <span style={{ fontWeight: 'bold', color: '#e30e63' }}>
                            <><b>NO TEAM FUNDS BULLSHIT!</b> </>
                        </span>
                    </StyledInsight>
                </Footnote>
                <br></br>
            </Card>
            <Spacer />
        
            <br></br>
            
        </StyledWrapper>)
        
    )
}

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

const StyledBalances = styled.div`
  display: flex;
`
const StyledBalanceLink = styled.a`
  font-weight: 600;
  font-size: 0.825rem;
  color: ${(props) => props.theme.color.grey[400]};
`
const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export default Balances
