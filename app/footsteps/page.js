"use client";

import { Colours } from "@/colours";
import { cormorant, roboto } from "@/components/home/hero";
import { Flex, List, Text } from "@mantine/core";

const data = [
    {
        title: "One-on-one Private Coaching: More than 2000 hours of coaching",
        description: [
            "Business Coaching and Mentoring for SMMEs in the Tourism Industry (2017-2018)",
            "Coaching Executives at the Department of Health (2017)",
            "Coaching Supervision for Life Coach Trainees at New Insights Africa (since 2012,Ongoing).",
            "Coaching young women and children at the shelters One Stop Centre for the Departmentof Social Development (2014 - 2020)",
        ]
    },
    {
        title: "Training & Facilitation",
        description: [
            "O. R. Tambo Municipality: Facilitation of Moral Regeneration Community Dialogues;Training Foster Parents; Community Youth Stigma and Discrimination Reduction (2018-2019 & 2020)",
            "Department of Education: School Management and School Learners 2017-2019",
        ]
    },
    {
        title: "Schools Turnaround Strategy",
        description: [
            "Riverside Private School: Coaching Matric Learners on Goal Setting 2021",
            "Ntapane Junior Secondary School : School Leadership Coaching 2018",
            "Welsh Senior Secondary School: School Turnaround Strategy- Learners Coachingprogram - 2016 Winter School"
        ]
    },
    {
        title: "Executive Coaching & Business Mentoring",
        description: [
            "IMAC: Coaching and Mentoring SMME in the Tourism Industry on how to draw businessplans, market and present their businesses to ensure continuous growth 2018",
            "SEDA: Coaching 25 Informal Traders on the basics of Business Developement and Management 2018",
            "National Department of Health: Nelson Mandela Hospital Complex & LSA ExecutiveCoaching. 5 Months Pilot with 22 Coachees, 8 sessions each (March to July 2017)",
            "Department of Social Development: Trauma Debriefing Training; Trauma Debriefing ofstaff and clients; Conflict Management Training; Coaching Clients at the Place of Safety",
            "AB350 Ltd. :Wellness, Human Resources: Employee Relations & S.H.E and Wellness(2013-2016)",
            "Ishvuyo JV Building Contractors: Wellness, HIV/AIDS and Life Skills (2013-2015)"
        ]
    },
    {
        title: "Spiritual Coaching",
        description: [
            "Anglican Diocese of Mthatha Clergy & Leadership: Crafting the Vision & MissionStatements of the Diocese (2021)",
            "Anglican Diocese of Mbashe Clergy: Trauma Debriefing & Crafting of Mission Statement (2021)",
            "Anglican Diocese of Mthatha Employees: Training in Work Expectations, Job Descriptions & Communication (2021)",
            "Clergy Spouses at the Diocese of Grahamstown: Retreat: “Being Myself” (2013)",
            "Clergy of the Diocese of Grahamstown: Training of the Fellowship of Vocation (2012)"
        ]
    },
    {
        title: "Motivation",
        description: [
            "Department of Education: Motivational Coaching Sessions for Grade 11 & 12 Learns in Senior Secondary Schools in the O.R. Tambo District (Ongoing since 2017)",
            "UCRFM Resident Life Coach: Wednesdays & Fridays (Ongoing since 2013)",
            "Umtha Welanga Senior Secondary School: Grade 12 motivational talk and awards ceremony",
            "SABC 1 (Nyan’Nyan): Coaching and motivational talks on media programs (2014-2016)",
            "Nelson Mandela Hospital: Motivating nursing staff (2014)"
        ]
    }
]

function Footsteps() {
    return (
        <Flex
            direction="column"
            gap={50}
            sx={{
                padding: "20px",
                paddingBottom: "100px"
            }}
        >
            <Text
                sx={{
                    fontSize: "61px",
                    fontWeight: 600,
                    color: Colours.blue,
                    textAlign: "center"
                }}
                className={cormorant.className}
            >
                Tobo's <span style={{ color: Colours.red }}>footsteps</span>
            </Text>
            <Text
                sx={{
                    fontSize: "18px",
                    color: Colours.blue,
                    padding: "0 20px"
                }}
            >
                Tobo has been involved in numerous activities that include coaching, facilitation, training, motivation, and
                mentoring long before establishing her Life Coaching company. Her business experience of more than 20
                years, owning and managing her own and family businesses added great value to the services she now offers as a
                Life, Business and Executive Coach. Below are some of her footprints:
            </Text>
            <Flex
                direction="column"
                gap={50}
            >
                {
                    data.map((item, index) => (
                        <Flex
                            key={index}
                            sx={{
                                height: "480px",
                                boxSizing: "border-box",
                                // borderBottom: `1px solid ${Colours.blue}`
                                backgroundColor: "#F4F5FF",
                                borderRadius: "20px",
                                padding: "20px"
                            }}
                            align="center"
                            // justify="center"
                        >
                            <Text
                                sx={{
                                    fontSize: "30px",
                                    // textAlign: "center",
                                    width: "50%"
                                }}
                            >
                                {item.title}
                            </Text>
                            <List
                                sx={{
                                    width: "50%",
                                    padding: "20px"
                                }}
                            >
                                {
                                    item.description.map((point, index) => (
                                        <List.Item
                                            key={index}
                                        >
                                            <Text
                                                className={roboto.className}
                                                sx={{
                                                    color: Colours.blue,
                                                    fontSize: "18px"
                                                }}
                                            >
                                                {point}
                                            </Text>
                                        </List.Item>
                                    ))
                                }
                            </List>
                        </Flex>
                    ))
                }
            </Flex>
        </Flex>
    )
}

export default Footsteps;