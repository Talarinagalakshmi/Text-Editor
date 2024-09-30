import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  SubContainer,
  TextContainer,
  Heading,
  Image,
  TextStyledContainer,
  UnOrderList,
  ListItem,
  Button,
  HrLine,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {boldText: false, italicText: false, underlineText: false}

  onClickBold = () => {
    this.setState(prevState => ({boldText: !prevState.boldText}))
  }

  onClickItalick = () => {
    this.setState(prevState => ({italicText: !prevState.italicText}))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({underlineText: !prevState.underlineText}))
  }

  render() {
    const {boldText, italicText, underlineText} = this.state

    const boldColor = boldText === false ? '#f1f5f9' : '#faff00'

    const italicColor = italicText === false ? '#f1f5f9' : '#faff00'
    const underlineColor = underlineText === false ? '#f1f5f9' : '#faff00'
    const boldFontweight = boldText === false ? 'normal' : 'bold'
    const underline = underlineText === false ? 'normal' : 'underline'
    const italic = italicText === false ? 'normal' : 'italic'

    return (
      <MainContainer>
        <SubContainer>
          <TextContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextContainer>

          <TextStyledContainer>
            <UnOrderList>
              <ListItem>
                <Button
                  type="button"
                  color={boldColor}
                  data-testid="bold"
                  onClick={this.onClickBold}
                >
                  <VscBold size={45} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  color={italicColor}
                  onClick={this.onClickItalick}
                  data-testid="italic"
                >
                  <GoItalic size={45} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  color={underlineColor}
                  onClick={this.onClickUnderLine}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={45} />
                </Button>
              </ListItem>
            </UnOrderList>
            <HrLine />
            <TextArea
              rows="20"
              cols="70"
              textDecaration={underline}
              fontWeight={boldFontweight}
              fontStyle={italic}
            />
          </TextStyledContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}
export default TextEditor
