import React, {useState, useContext, createContext} from "react";
import {
    Conatiner,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Image
} from "./styles/card";

const FeatureContext = createContext();

const Card = ({children, ...props}) => {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState(false);

    return (
        <FeatureContext.Provider value={{}}>
            <Container {...props}>{children}</Container>
        </FeatureContext.Provider>
    );
}

Card.Group = ({children, ...props}) => <Group {...props}>{children}</Group>;

Card.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

Card.SubTitle = ({children, ...props}) => <SubTitle {...props}>{children}</SubTitle>;

Card.Text = ({children, ...props}) => <Text {...props}>{children}</Text>;

Card.Entities = ({children, ...props}) => <Entities {...props}>{children}</Entities>;

Card.Meta = ({children, ...props}) => <Meta {...props}>{children}</Meta>;

Card.Item = ({item, children, ...props}) => {
    const {setShowFeature, setItemFeature} = useContext(FeatureContext);

    return (
        <Item
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
        }} {...props}>{children}</Item>
    );
}

Card.Image = ({...props}) => <Image {...props}/>;

Card.Feature = ({category, children, ...props}) => {
    const {showFeature, itemFeature, setSHowFeature} = useContext(FeatureContext);

    return showFeature ? (
        <Feature src={`images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setSHowFeature(false)}>
                    <img src="image/icons/close.png" alt="Close"/>
                </FeatureClose>
                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                    <FeatureText fontWeight="700">
                        {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>
                {children}
            </Content>
        </Feature>
    ) : null;
};

export default Card;