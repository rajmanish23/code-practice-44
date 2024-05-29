import {Component} from 'react'
import {
  PageContainer,
  PageHeaderMobile,
  PageHeaderDesktop,
  InputContainer,
  Label,
  Input,
  Button,
  MemeContainer,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    selectedFontSize: fontSizesOptionsList[0].optionId,
    appliedImageUrl: '',
    appliedTopText: '',
    appliedBottomText: '',
    appliedFontSize: '',
  }

  onChangeUpdateImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeUpdateTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeUpdateBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeUpdateSelectedFontSize = event => {
    this.setState({selectedFontSize: event.target.value})
  }

  onSubmitGenerateMeme = event => {
    event.preventDefault()
    const {bottomText, imageUrl, selectedFontSize, topText} = this.state
    this.setState({
      appliedBottomText: bottomText,
      appliedFontSize: selectedFontSize,
      appliedImageUrl: imageUrl,
      appliedTopText: topText,
    })
  }

  render() {
    const {
      imageUrl,
      topText,
      bottomText,
      selectedFontSize,
      appliedBottomText,
      appliedFontSize,
      appliedImageUrl,
      appliedTopText,
    } = this.state
    return (
      <PageContainer>
        <PageHeaderMobile>Meme Generator</PageHeaderMobile>
        <InputContainer onSubmit={this.onSubmitGenerateMeme}>
          <PageHeaderDesktop>Meme Generator</PageHeaderDesktop>
          <Label htmlFor="urlInput">Image URL</Label>
          <Input
            id="urlInput"
            placeholder="Enter the Image URL"
            onChange={this.onChangeUpdateImageUrl}
            value={imageUrl}
            type="text"
          />
          <Label htmlFor="topText">Top Text</Label>
          <Input
            id="topText"
            placeholder="Enter the Top Text"
            onChange={this.onChangeUpdateTopText}
            value={topText}
            type="text"
          />
          <Label htmlFor="bottomText">Bottom Text</Label>
          <Input
            id="bottomText"
            placeholder="Enter the Bottom Text"
            onChange={this.onChangeUpdateBottomText}
            value={bottomText}
            type="text"
          />
          <Label htmlFor="fontSize">Font Size</Label>
          <Input
            as="select"
            id="fontSize"
            value={selectedFontSize}
            onChange={this.onChangeUpdateSelectedFontSize}
          >
            {fontSizesOptionsList.map(eachFontSize => (
              <option value={eachFontSize.optionId} key={eachFontSize.optionId}>
                {eachFontSize.displayText}
              </option>
            ))}
          </Input>
          <Button type="submit">Generate</Button>
        </InputContainer>

        <MemeContainer bgImg={appliedImageUrl} data-testid="meme">
          <MemeText fontSize={appliedFontSize}>{appliedTopText}</MemeText>
          <MemeText fontSize={appliedFontSize}>{appliedBottomText}</MemeText>
        </MemeContainer>
      </PageContainer>
    )
  }
}

export default MemeGenerator
