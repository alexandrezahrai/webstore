import React from "react";
import { Box, Container, Divider, Typography } from "@material-ui/core";
import { ColumnToRow, Row, Item } from "@mui-treasury/components/flex";
import {
  SocialProvider,
  SocialLink,
} from "@mui-treasury/components/socialLink";
import { useMoonSocialLinkStyles } from "@mui-treasury/styles/socialLink/moon";
import useStyles from "./styles";

const myFooter = React.memo(function NeptuneAppFooter() {
  const classes = useStyles();
  return (
    <Box bgcolor={"#fafafa"} width={"100%"}>
      <Container>
        <Box pt={8} pb={1}>
          <Row wrap alignItems="center">
            <Item grow={2}>
              <Row alignItems={"center"}>
                <Item>
                  <Typography
                    className={classes.specialFont}
                    variant={"h6"}
                    color={"textSecondary"}
                    style={{
                      letterSpacing: ".3rem",
                      textTransform: "uppercase",
                    }}
                  >
                    Runner's Paradise
                  </Typography>
                </Item>
              </Row>
            </Item>
            <Item grow maxWidth={500} mx={"auto"}>
              <Box textAlign={"center"} mt={{ xs: 2, md: 0 }} my={2}>
                <SocialProvider useStyles={useMoonSocialLinkStyles}>
                  <SocialLink
                    brand={"GithubCircle"}
                    href={"https://github.com/alexandrezahrai"}
                  />
                  <SocialLink
                    brand={"LinkedIn"}
                    href={"https://www.linkedin.com/in/alexandre-zahrai"}
                  />
                </SocialProvider>
              </Box>
            </Item>
          </Row>
        </Box>
        <Divider />
        <Box pt={2} pb={10}>
          <ColumnToRow
            at={"md"}
            columnStyle={{ alignItems: "center" }}
            justifyContent={"center"}
            rowStyle={{ alignItems: "unset" }}
          >
            <Item>
              <Box py={1} textAlign={{ xs: "center", md: "right" }}>
                <Typography
                  component={"p"}
                  variant={"caption"}
                  color={"textSecondary"}
                >
                  © Alex Zahrai 2021
                </Typography>
              </Box>
            </Item>
          </ColumnToRow>
        </Box>
      </Container>
    </Box>
  );
});

export default myFooter;
