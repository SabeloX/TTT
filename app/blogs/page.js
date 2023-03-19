"use client";

import { Colours } from "@/colours";
import { cormorant } from "@/components/home/hero";
import { Button, Flex, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

export const data = [
    {
        title: "Grief",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae. Viverra ipsum nunc aliquet bibendum enim.`,
        articles: [
            {
                title: "The importance of healthy relationships",
                image: "/assets/couple-443600_960_720 1.svg",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit lectus a. Sed turpis tincidunt id aliquet risus feugiat. Semper quis lectus nulla at volutpat diam. Nullam eget felis eget nunc lobortis. Consequat nisl vel pretium lectus quam id. Id venenatis a condimentum vitae. Vestibulum morbi blandit cursus risus. Consectetur adipiscing elit pellentesque habitant morbi. Amet venenatis urna cursus eget nunc scelerisque viverra.

                Sit amet luctus venenatis lectus. Facilisis gravida neque convallis a cras semper auctor. Id eu nisl nunc mi ipsum faucibus vitae. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Gravida rutrum quisque non tellus orci ac auctor. Venenatis cras sed felis eget velit. Pharetra massa massa ultricies mi quis hendrerit. Egestas diam in arcu cursus euismod. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Eget egestas purus viverra accumsan in. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Tellus cras adipiscing enim eu. Enim eu turpis egestas pretium aenean pharetra. Fermentum posuere urna nec tincidunt. In metus vulputate eu scelerisque felis imperdiet proin. Orci sagittis eu volutpat odio facilisis mauris sit amet massa.
                
                Scelerisque eu ultrices vitae auctor. Leo in vitae turpis massa sed elementum tempus egestas sed. Arcu odio ut sem nulla. Amet commodo nulla facilisi nullam. Ornare suspendisse sed nisi lacus sed viverra tellus. Curabitur vitae nunc sed velit. Ornare quam viverra orci sagittis eu. Urna molestie at elementum eu facilisis sed odio morbi. Vitae nunc sed velit dignissim sodales. Tellus elementum sagittis vitae et leo. A lacus vestibulum sed arcu non odio euismod lacinia at. Tempor orci dapibus ultrices in. Vel eros donec ac odio tempor orci. Dui id ornare arcu odio ut sem nulla. Massa ultricies mi quis hendrerit. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Tempor nec feugiat nisl pretium.
                
                Ultrices sagittis orci a scelerisque purus semper eget. Vehicula ipsum a arcu cursus vitae congue mauris. Sit amet est placerat in egestas. Rhoncus mattis rhoncus urna neque viverra justo nec. Enim ut tellus elementum sagittis vitae et leo duis ut. Aenean pharetra magna ac placerat vestibulum lectus. Nullam vehicula ipsum a arcu cursus vitae. Sed arcu non odio euismod lacinia at quis. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Ut etiam sit amet nisl purus in mollis. Dui ut ornare lectus sit amet est placerat. Vel eros donec ac odio tempor orci dapibus ultrices. Commodo ullamcorper a lacus vestibulum sed arcu. Adipiscing elit duis tristique sollicitudin nibh sit. Quis risus sed vulputate odio ut. Vel pretium lectus quam id leo. Magna fermentum iaculis eu non.
                
                Placerat in egestas erat imperdiet sed euismod nisi porta. Ipsum consequat nisl vel pretium lectus quam id leo. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Risus quis varius quam quisque id diam vel. Ipsum dolor sit amet consectetur adipiscing. Eros donec ac odio tempor orci dapibus. Posuere morbi leo urna molestie at elementum eu facilisis sed. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Interdum posuere lorem ipsum dolor sit amet consectetur. Est sit amet facilisis magna. Donec massa sapien faucibus et. Aliquam nulla facilisi cras fermentum odio eu. Nunc aliquet bibendum enim facilisis.`
            },
            {
                title: "Marriage issues and divorce",
                image: "/assets/couch-1868755_960_720 1.svg",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit lectus a. Sed turpis tincidunt id aliquet risus feugiat. Semper quis lectus nulla at volutpat diam. Nullam eget felis eget nunc lobortis. Consequat nisl vel pretium lectus quam id. Id venenatis a condimentum vitae. Vestibulum morbi blandit cursus risus. Consectetur adipiscing elit pellentesque habitant morbi. Amet venenatis urna cursus eget nunc scelerisque viverra.

                Sit amet luctus venenatis lectus. Facilisis gravida neque convallis a cras semper auctor. Id eu nisl nunc mi ipsum faucibus vitae. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Gravida rutrum quisque non tellus orci ac auctor. Venenatis cras sed felis eget velit. Pharetra massa massa ultricies mi quis hendrerit. Egestas diam in arcu cursus euismod. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Eget egestas purus viverra accumsan in. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Tellus cras adipiscing enim eu. Enim eu turpis egestas pretium aenean pharetra. Fermentum posuere urna nec tincidunt. In metus vulputate eu scelerisque felis imperdiet proin. Orci sagittis eu volutpat odio facilisis mauris sit amet massa.
                
                Scelerisque eu ultrices vitae auctor. Leo in vitae turpis massa sed elementum tempus egestas sed. Arcu odio ut sem nulla. Amet commodo nulla facilisi nullam. Ornare suspendisse sed nisi lacus sed viverra tellus. Curabitur vitae nunc sed velit. Ornare quam viverra orci sagittis eu. Urna molestie at elementum eu facilisis sed odio morbi. Vitae nunc sed velit dignissim sodales. Tellus elementum sagittis vitae et leo. A lacus vestibulum sed arcu non odio euismod lacinia at. Tempor orci dapibus ultrices in. Vel eros donec ac odio tempor orci. Dui id ornare arcu odio ut sem nulla. Massa ultricies mi quis hendrerit. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Tempor nec feugiat nisl pretium.
                
                Ultrices sagittis orci a scelerisque purus semper eget. Vehicula ipsum a arcu cursus vitae congue mauris. Sit amet est placerat in egestas. Rhoncus mattis rhoncus urna neque viverra justo nec. Enim ut tellus elementum sagittis vitae et leo duis ut. Aenean pharetra magna ac placerat vestibulum lectus. Nullam vehicula ipsum a arcu cursus vitae. Sed arcu non odio euismod lacinia at quis. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Ut etiam sit amet nisl purus in mollis. Dui ut ornare lectus sit amet est placerat. Vel eros donec ac odio tempor orci dapibus ultrices. Commodo ullamcorper a lacus vestibulum sed arcu. Adipiscing elit duis tristique sollicitudin nibh sit. Quis risus sed vulputate odio ut. Vel pretium lectus quam id leo. Magna fermentum iaculis eu non.
                
                Placerat in egestas erat imperdiet sed euismod nisi porta. Ipsum consequat nisl vel pretium lectus quam id leo. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Risus quis varius quam quisque id diam vel. Ipsum dolor sit amet consectetur adipiscing. Eros donec ac odio tempor orci dapibus. Posuere morbi leo urna molestie at elementum eu facilisis sed. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Interdum posuere lorem ipsum dolor sit amet consectetur. Est sit amet facilisis magna. Donec massa sapien faucibus et. Aliquam nulla facilisi cras fermentum odio eu. Nunc aliquet bibendum enim facilisis.`
            },
            {
                title: "Career transition",
                image: "/assets/doors-1587329_960_720 1.svg",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit lectus a. Sed turpis tincidunt id aliquet risus feugiat. Semper quis lectus nulla at volutpat diam. Nullam eget felis eget nunc lobortis. Consequat nisl vel pretium lectus quam id. Id venenatis a condimentum vitae. Vestibulum morbi blandit cursus risus. Consectetur adipiscing elit pellentesque habitant morbi. Amet venenatis urna cursus eget nunc scelerisque viverra.

                Sit amet luctus venenatis lectus. Facilisis gravida neque convallis a cras semper auctor. Id eu nisl nunc mi ipsum faucibus vitae. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Gravida rutrum quisque non tellus orci ac auctor. Venenatis cras sed felis eget velit. Pharetra massa massa ultricies mi quis hendrerit. Egestas diam in arcu cursus euismod. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Eget egestas purus viverra accumsan in. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Tellus cras adipiscing enim eu. Enim eu turpis egestas pretium aenean pharetra. Fermentum posuere urna nec tincidunt. In metus vulputate eu scelerisque felis imperdiet proin. Orci sagittis eu volutpat odio facilisis mauris sit amet massa.
                
                Scelerisque eu ultrices vitae auctor. Leo in vitae turpis massa sed elementum tempus egestas sed. Arcu odio ut sem nulla. Amet commodo nulla facilisi nullam. Ornare suspendisse sed nisi lacus sed viverra tellus. Curabitur vitae nunc sed velit. Ornare quam viverra orci sagittis eu. Urna molestie at elementum eu facilisis sed odio morbi. Vitae nunc sed velit dignissim sodales. Tellus elementum sagittis vitae et leo. A lacus vestibulum sed arcu non odio euismod lacinia at. Tempor orci dapibus ultrices in. Vel eros donec ac odio tempor orci. Dui id ornare arcu odio ut sem nulla. Massa ultricies mi quis hendrerit. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Tempor nec feugiat nisl pretium.
                
                Ultrices sagittis orci a scelerisque purus semper eget. Vehicula ipsum a arcu cursus vitae congue mauris. Sit amet est placerat in egestas. Rhoncus mattis rhoncus urna neque viverra justo nec. Enim ut tellus elementum sagittis vitae et leo duis ut. Aenean pharetra magna ac placerat vestibulum lectus. Nullam vehicula ipsum a arcu cursus vitae. Sed arcu non odio euismod lacinia at quis. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Ut etiam sit amet nisl purus in mollis. Dui ut ornare lectus sit amet est placerat. Vel eros donec ac odio tempor orci dapibus ultrices. Commodo ullamcorper a lacus vestibulum sed arcu. Adipiscing elit duis tristique sollicitudin nibh sit. Quis risus sed vulputate odio ut. Vel pretium lectus quam id leo. Magna fermentum iaculis eu non.
                
                Placerat in egestas erat imperdiet sed euismod nisi porta. Ipsum consequat nisl vel pretium lectus quam id leo. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Risus quis varius quam quisque id diam vel. Ipsum dolor sit amet consectetur adipiscing. Eros donec ac odio tempor orci dapibus. Posuere morbi leo urna molestie at elementum eu facilisis sed. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Interdum posuere lorem ipsum dolor sit amet consectetur. Est sit amet facilisis magna. Donec massa sapien faucibus et. Aliquam nulla facilisi cras fermentum odio eu. Nunc aliquet bibendum enim facilisis.`
            },
            {
                title: "Family therapy",
                image: "/assets/doors-1587329_960_720 1.svg",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit lectus a. Sed turpis tincidunt id aliquet risus feugiat. Semper quis lectus nulla at volutpat diam. Nullam eget felis eget nunc lobortis. Consequat nisl vel pretium lectus quam id. Id venenatis a condimentum vitae. Vestibulum morbi blandit cursus risus. Consectetur adipiscing elit pellentesque habitant morbi. Amet venenatis urna cursus eget nunc scelerisque viverra.

                Sit amet luctus venenatis lectus. Facilisis gravida neque convallis a cras semper auctor. Id eu nisl nunc mi ipsum faucibus vitae. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Gravida rutrum quisque non tellus orci ac auctor. Venenatis cras sed felis eget velit. Pharetra massa massa ultricies mi quis hendrerit. Egestas diam in arcu cursus euismod. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Eget egestas purus viverra accumsan in. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Tellus cras adipiscing enim eu. Enim eu turpis egestas pretium aenean pharetra. Fermentum posuere urna nec tincidunt. In metus vulputate eu scelerisque felis imperdiet proin. Orci sagittis eu volutpat odio facilisis mauris sit amet massa.
                
                Scelerisque eu ultrices vitae auctor. Leo in vitae turpis massa sed elementum tempus egestas sed. Arcu odio ut sem nulla. Amet commodo nulla facilisi nullam. Ornare suspendisse sed nisi lacus sed viverra tellus. Curabitur vitae nunc sed velit. Ornare quam viverra orci sagittis eu. Urna molestie at elementum eu facilisis sed odio morbi. Vitae nunc sed velit dignissim sodales. Tellus elementum sagittis vitae et leo. A lacus vestibulum sed arcu non odio euismod lacinia at. Tempor orci dapibus ultrices in. Vel eros donec ac odio tempor orci. Dui id ornare arcu odio ut sem nulla. Massa ultricies mi quis hendrerit. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Tempor nec feugiat nisl pretium.
                
                Ultrices sagittis orci a scelerisque purus semper eget. Vehicula ipsum a arcu cursus vitae congue mauris. Sit amet est placerat in egestas. Rhoncus mattis rhoncus urna neque viverra justo nec. Enim ut tellus elementum sagittis vitae et leo duis ut. Aenean pharetra magna ac placerat vestibulum lectus. Nullam vehicula ipsum a arcu cursus vitae. Sed arcu non odio euismod lacinia at quis. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Ut etiam sit amet nisl purus in mollis. Dui ut ornare lectus sit amet est placerat. Vel eros donec ac odio tempor orci dapibus ultrices. Commodo ullamcorper a lacus vestibulum sed arcu. Adipiscing elit duis tristique sollicitudin nibh sit. Quis risus sed vulputate odio ut. Vel pretium lectus quam id leo. Magna fermentum iaculis eu non.
                
                Placerat in egestas erat imperdiet sed euismod nisi porta. Ipsum consequat nisl vel pretium lectus quam id leo. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Risus quis varius quam quisque id diam vel. Ipsum dolor sit amet consectetur adipiscing. Eros donec ac odio tempor orci dapibus. Posuere morbi leo urna molestie at elementum eu facilisis sed. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Interdum posuere lorem ipsum dolor sit amet consectetur. Est sit amet facilisis magna. Donec massa sapien faucibus et. Aliquam nulla facilisi cras fermentum odio eu. Nunc aliquet bibendum enim facilisis.`
            }
        ]
    },
    {
        title: "Relationships",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae. Viverra ipsum nunc aliquet bibendum enim.",
        articles: [
            {
                title: "Marriage issues and divorce",
                image: "/assets/couch-1868755_960_720 1.svg",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit lectus a. Sed turpis tincidunt id aliquet risus feugiat. Semper quis lectus nulla at volutpat diam. Nullam eget felis eget nunc lobortis. Consequat nisl vel pretium lectus quam id. Id venenatis a condimentum vitae. Vestibulum morbi blandit cursus risus. Consectetur adipiscing elit pellentesque habitant morbi. Amet venenatis urna cursus eget nunc scelerisque viverra.

                Sit amet luctus venenatis lectus. Facilisis gravida neque convallis a cras semper auctor. Id eu nisl nunc mi ipsum faucibus vitae. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Gravida rutrum quisque non tellus orci ac auctor. Venenatis cras sed felis eget velit. Pharetra massa massa ultricies mi quis hendrerit. Egestas diam in arcu cursus euismod. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Eget egestas purus viverra accumsan in. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Tellus cras adipiscing enim eu. Enim eu turpis egestas pretium aenean pharetra. Fermentum posuere urna nec tincidunt. In metus vulputate eu scelerisque felis imperdiet proin. Orci sagittis eu volutpat odio facilisis mauris sit amet massa.
                
                Scelerisque eu ultrices vitae auctor. Leo in vitae turpis massa sed elementum tempus egestas sed. Arcu odio ut sem nulla. Amet commodo nulla facilisi nullam. Ornare suspendisse sed nisi lacus sed viverra tellus. Curabitur vitae nunc sed velit. Ornare quam viverra orci sagittis eu. Urna molestie at elementum eu facilisis sed odio morbi. Vitae nunc sed velit dignissim sodales. Tellus elementum sagittis vitae et leo. A lacus vestibulum sed arcu non odio euismod lacinia at. Tempor orci dapibus ultrices in. Vel eros donec ac odio tempor orci. Dui id ornare arcu odio ut sem nulla. Massa ultricies mi quis hendrerit. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Tempor nec feugiat nisl pretium.
                
                Ultrices sagittis orci a scelerisque purus semper eget. Vehicula ipsum a arcu cursus vitae congue mauris. Sit amet est placerat in egestas. Rhoncus mattis rhoncus urna neque viverra justo nec. Enim ut tellus elementum sagittis vitae et leo duis ut. Aenean pharetra magna ac placerat vestibulum lectus. Nullam vehicula ipsum a arcu cursus vitae. Sed arcu non odio euismod lacinia at quis. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Ut etiam sit amet nisl purus in mollis. Dui ut ornare lectus sit amet est placerat. Vel eros donec ac odio tempor orci dapibus ultrices. Commodo ullamcorper a lacus vestibulum sed arcu. Adipiscing elit duis tristique sollicitudin nibh sit. Quis risus sed vulputate odio ut. Vel pretium lectus quam id leo. Magna fermentum iaculis eu non.
                
                Placerat in egestas erat imperdiet sed euismod nisi porta. Ipsum consequat nisl vel pretium lectus quam id leo. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Risus quis varius quam quisque id diam vel. Ipsum dolor sit amet consectetur adipiscing. Eros donec ac odio tempor orci dapibus. Posuere morbi leo urna molestie at elementum eu facilisis sed. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Interdum posuere lorem ipsum dolor sit amet consectetur. Est sit amet facilisis magna. Donec massa sapien faucibus et. Aliquam nulla facilisi cras fermentum odio eu. Nunc aliquet bibendum enim facilisis.`
            }
        ]
    },
    {
        title: "Marriage",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae. Viverra ipsum nunc aliquet bibendum enim.`,
        articles: [
            {
                title: "Career transition",
                image: "/assets/doors-1587329_960_720 1.svg",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit lectus a. Sed turpis tincidunt id aliquet risus feugiat. Semper quis lectus nulla at volutpat diam. Nullam eget felis eget nunc lobortis. Consequat nisl vel pretium lectus quam id. Id venenatis a condimentum vitae. Vestibulum morbi blandit cursus risus. Consectetur adipiscing elit pellentesque habitant morbi. Amet venenatis urna cursus eget nunc scelerisque viverra.\n

                Sit amet luctus venenatis lectus. Facilisis gravida neque convallis a cras semper auctor. Id eu nisl nunc mi ipsum faucibus vitae. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Gravida rutrum quisque non tellus orci ac auctor. Venenatis cras sed felis eget velit. Pharetra massa massa ultricies mi quis hendrerit. Egestas diam in arcu cursus euismod. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Eget egestas purus viverra accumsan in. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Tellus cras adipiscing enim eu. Enim eu turpis egestas pretium aenean pharetra. Fermentum posuere urna nec tincidunt. In metus vulputate eu scelerisque felis imperdiet proin. Orci sagittis eu volutpat odio facilisis mauris sit amet massa.
                
                Scelerisque eu ultrices vitae auctor. Leo in vitae turpis massa sed elementum tempus egestas sed. Arcu odio ut sem nulla. Amet commodo nulla facilisi nullam. Ornare suspendisse sed nisi lacus sed viverra tellus. Curabitur vitae nunc sed velit. Ornare quam viverra orci sagittis eu. Urna molestie at elementum eu facilisis sed odio morbi. Vitae nunc sed velit dignissim sodales. Tellus elementum sagittis vitae et leo. A lacus vestibulum sed arcu non odio euismod lacinia at. Tempor orci dapibus ultrices in. Vel eros donec ac odio tempor orci. Dui id ornare arcu odio ut sem nulla. Massa ultricies mi quis hendrerit. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Tempor nec feugiat nisl pretium.
                
                Ultrices sagittis orci a scelerisque purus semper eget. Vehicula ipsum a arcu cursus vitae congue mauris. Sit amet est placerat in egestas. Rhoncus mattis rhoncus urna neque viverra justo nec. Enim ut tellus elementum sagittis vitae et leo duis ut. Aenean pharetra magna ac placerat vestibulum lectus. Nullam vehicula ipsum a arcu cursus vitae. Sed arcu non odio euismod lacinia at quis. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Ut etiam sit amet nisl purus in mollis. Dui ut ornare lectus sit amet est placerat. Vel eros donec ac odio tempor orci dapibus ultrices. Commodo ullamcorper a lacus vestibulum sed arcu. Adipiscing elit duis tristique sollicitudin nibh sit. Quis risus sed vulputate odio ut. Vel pretium lectus quam id leo. Magna fermentum iaculis eu non.
                
                Placerat in egestas erat imperdiet sed euismod nisi porta. Ipsum consequat nisl vel pretium lectus quam id leo. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Risus quis varius quam quisque id diam vel. Ipsum dolor sit amet consectetur adipiscing. Eros donec ac odio tempor orci dapibus. Posuere morbi leo urna molestie at elementum eu facilisis sed. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Interdum posuere lorem ipsum dolor sit amet consectetur. Est sit amet facilisis magna. Donec massa sapien faucibus et. Aliquam nulla facilisi cras fermentum odio eu. Nunc aliquet bibendum enim facilisis.`
            }
        ]
    },
    {
        title: "Career",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae. Viverra ipsum nunc aliquet bibendum enim.",
        articles: [
            {
                title: "Family therapy",
                image: "/assets/doors-1587329_960_720 1.svg",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit lectus a. Sed turpis tincidunt id aliquet risus feugiat. Semper quis lectus nulla at volutpat diam. Nullam eget felis eget nunc lobortis. Consequat nisl vel pretium lectus quam id. Id venenatis a condimentum vitae. Vestibulum morbi blandit cursus risus. Consectetur adipiscing elit pellentesque habitant morbi. Amet venenatis urna cursus eget nunc scelerisque viverra.

                Sit amet luctus venenatis lectus. Facilisis gravida neque convallis a cras semper auctor. Id eu nisl nunc mi ipsum faucibus vitae. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Gravida rutrum quisque non tellus orci ac auctor. Venenatis cras sed felis eget velit. Pharetra massa massa ultricies mi quis hendrerit. Egestas diam in arcu cursus euismod. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Eget egestas purus viverra accumsan in. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Tellus cras adipiscing enim eu. Enim eu turpis egestas pretium aenean pharetra. Fermentum posuere urna nec tincidunt. In metus vulputate eu scelerisque felis imperdiet proin. Orci sagittis eu volutpat odio facilisis mauris sit amet massa.
                
                Scelerisque eu ultrices vitae auctor. Leo in vitae turpis massa sed elementum tempus egestas sed. Arcu odio ut sem nulla. Amet commodo nulla facilisi nullam. Ornare suspendisse sed nisi lacus sed viverra tellus. Curabitur vitae nunc sed velit. Ornare quam viverra orci sagittis eu. Urna molestie at elementum eu facilisis sed odio morbi. Vitae nunc sed velit dignissim sodales. Tellus elementum sagittis vitae et leo. A lacus vestibulum sed arcu non odio euismod lacinia at. Tempor orci dapibus ultrices in. Vel eros donec ac odio tempor orci. Dui id ornare arcu odio ut sem nulla. Massa ultricies mi quis hendrerit. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Tempor nec feugiat nisl pretium.
                
                Ultrices sagittis orci a scelerisque purus semper eget. Vehicula ipsum a arcu cursus vitae congue mauris. Sit amet est placerat in egestas. Rhoncus mattis rhoncus urna neque viverra justo nec. Enim ut tellus elementum sagittis vitae et leo duis ut. Aenean pharetra magna ac placerat vestibulum lectus. Nullam vehicula ipsum a arcu cursus vitae. Sed arcu non odio euismod lacinia at quis. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Ut etiam sit amet nisl purus in mollis. Dui ut ornare lectus sit amet est placerat. Vel eros donec ac odio tempor orci dapibus ultrices. Commodo ullamcorper a lacus vestibulum sed arcu. Adipiscing elit duis tristique sollicitudin nibh sit. Quis risus sed vulputate odio ut. Vel pretium lectus quam id leo. Magna fermentum iaculis eu non.
                
                Placerat in egestas erat imperdiet sed euismod nisi porta. Ipsum consequat nisl vel pretium lectus quam id leo. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Risus quis varius quam quisque id diam vel. Ipsum dolor sit amet consectetur adipiscing. Eros donec ac odio tempor orci dapibus. Posuere morbi leo urna molestie at elementum eu facilisis sed. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Interdum posuere lorem ipsum dolor sit amet consectetur. Est sit amet facilisis magna. Donec massa sapien faucibus et. Aliquam nulla facilisi cras fermentum odio eu. Nunc aliquet bibendum enim facilisis.`
            }
        ]
    }
];

function Blogs() {
    const router = useRouter();
    return (
        <Flex
            direction="column"
            gap={50}
            sx={{
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
                Blogs
            </Text>
            <Text
                sx={{
                    fontSize: "20px",
                    textAlign: "center"
                }}
            >
                Interested in what Tobo thinks? Read the articles below.
            </Text>
            <Flex
                wrap="wrap"
                gap={30}
            >
                {
                    data.map((item, index) => (
                        <Flex
                            key={index}
                            sx={{
                                width: "270px",
                                // height: "200px",
                                boxShadow: "2px 2px 8px rgba(0,0,0,16%)",
                                padding: "20px",
                                textAlign: "center",
                                borderRadius: "20px"
                            }}
                            direction="column"
                            gap={20}
                        >
                            <Text
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: 600
                                }}
                            >
                                {item.title}
                            </Text>
                            <Text>{item.description}</Text>
                            <Flex
                                justify="center"
                            >
                                <Button
                                    styles={{
                                        root: {
                                            color: Colours.white,
                                            backgroundColor: Colours.red,
                                            width: "200px",
                                            borderRadius: "10px",
                                            "&:hover": {
                                                color: Colours.white,
                                                backgroundColor: `${Colours.red} !important`,
                                            }
                                        }
                                    }}
                                    variant="filled"
                                    onClick={() => router.push(`/blogs/${item.title.toLowerCase()}`)}
                                >
                                    View articles
                                </Button>
                            </Flex>
                        </Flex>
                    ))
                }
            </Flex>
        </Flex>
    )
}

export default Blogs;