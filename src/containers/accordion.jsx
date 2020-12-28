import React from "react";
import {Accordion} from "../components";
import faqsData from "../fixtures/faqs.json";

const AccordionContainer = () => (
    <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map(item => (
            <Accordion.Item key={`faq-${item.id}`}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
        ))}
    </Accordion>
);

export default AccordionContainer;