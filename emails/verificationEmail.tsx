import { Html, Head, Font, Preview, Section, Row, Heading, Text} from "@react-email/components";

interface verificationEmailProps {
  username: string;
  otp: string;
  
}

export default function VerificationEmail({
  username,
  otp,
}: verificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>

        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Preview>Here&apos;s your verification code : {otp}</Preview>

      <Section>
        <Row>
            <Heading as= "h2" > hello {username}, </Heading>
        </Row>

        <Row>
            <Text>
                Thankyou for registering. Please use the following code to verify your account
            </Text>
        </Row>

        <Row>
            <Text>{otp}</Text>
        </Row>

        <Row>
            <Text>
                Kindly ignore if you have not requested for any such OTP.
            </Text>
        </Row>
      </Section>
    </Html>
  );
}
