import BigNumber from 'bignumber.js'
import React, { memo } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from './../../components/Card'
import CardContent from './../../components/CardContent'
import Label from './../../components/Label'
import Spacer from './../../components/Spacer'
import Value from './../../components/Value'

import Luas from './../../assets/img/lua-icon.svg'
import xLuas from './../../assets/img/xluas-icon.svg'



const Balances = () => {

    return (
        <StyledWrapper>
            <Card>
                <CardContent>
                    <StyledBalances>
                        <StyledBalance>
                            {/* <SushiIcon /> */}
                            <img src={xLuas} alt="xCMT Balance" />
                            <Spacer />
                            <div style={{ flex: 1 }}>
                                <Label text="Your Available xCMT Balance" />
                                <StyledBalanceLink
                                    href="https://app.uniswap.org/#/swap?exactField=input&exactAmount=1&outputCurrency=0x2f3De6B0a73d965f810864E3686c1c8ea634c10E"
                                    rel="noreferrer noopner"
                                    target="_blank"
                                >Get xCMT</StyledBalanceLink>
                            </div>
                        </StyledBalance>
                    </StyledBalances>
                </CardContent>
                <Footnote>
                    Pending Harvest
          <FootnoteValue>
                        xCMT
          </FootnoteValue>
                    <StyledInsight>
                        <span>Total Burned</span>
                        <span style={{ fontWeight: 'bold', color: '#4caf50' }}>
                            <><b>--- </b> </>
                        </span>
                    </StyledInsight>
                    <StyledInsight>
                        <span>Total Supply</span>
                        <span style={{ fontWeight: 'bold', color: '#4caf50' }}>
                            <><b>1000</b> </>
                        </span>
                    </StyledInsight>
                </Footnote>
            </Card>
            <Spacer />
            <Card>
                <CardContent>
                    <StyledBalances>
                        <StyledBalance>
                            {/* <SushiIcon /> */}
                            <img src={Luas} alt="CMT Balance" />
                            <Spacer />
                            <div style={{ flex: 1 }}>
                                <Label text="Your Available CMT Balance" />
                                <StyledBalanceLink
                                    href="https://app.uniswap.org/#/swap?exactField=input&exactAmount=1&outputCurrency=0x17258ca8dabbfBdcB969D108A016aB4cb93B74e9"
                                    rel="noreferrer noopner"
                                    target="_blank"
                                >Get CMT</StyledBalanceLink>
                            </div>
                        </StyledBalance>
                    </StyledBalances>
                </CardContent>
                <Footnote>
                    Pending Harvest
          <FootnoteValue>
                        CMT
          </FootnoteValue>
                    <StyledInsight>
                        <span>Total Burned</span>
                        <span style={{ fontWeight: 'bold', color: '#4caf50' }}>
                            <><b>200000 </b> </>
                        </span>
                    </StyledInsight>
                    <StyledInsight>
                        <span>Total Circulating Supply</span>
                        <span style={{ fontWeight: 'bold', color: '#4caf50' }}>
                            <><b>450000 </b> </>
                        </span>
                    </StyledInsight>
                </Footnote>
            </Card>
            <Spacer />
        </StyledWrapper>
    )
}

const Footnote = styled.div`
  font-size: 14px;
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
const StyledBalanceHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`
const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export default Balances
