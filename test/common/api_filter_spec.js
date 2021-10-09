/*
 * Copyright (c) 2021 Jens-Uwe Rossbach
 *
 * This code is licensed under the MIT License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


const should = require("should");
const apiFilter = require("../../nodes/common/api_filter.js");


describe("api_filter", function()
{
    context("speakerSetting", function()
    {
        it("should produce an object as payload", function()
        {
            const response = {
                "service": "audio",
                "method": "getSpeakerSettings",
                "version": "1.0",
                "payload": [
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "title": "Front & Center",
                                "value": "front&center"
                            },
                            {
                                "isAvailable": true,
                                "title": "Front",
                                "value": "front"
                            },
                            {
                                "isAvailable": true,
                                "title": "Off",
                                "value": "off"
                            },
                            {
                                "isAvailable": false,
                                "title": "",
                                "value": ""
                            }
                        ],
                        "currentValue": "off",
                        "isAvailable": true,
                        "target": "inCeilingSpeakerMode",
                        "title": "In-Ceiling Speaker Mode",
                        "titleTextID": "sound-inceiling",
                        "type": "enumTarget"
                    },
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "title": "Speaker A",
                                "titleTextID": "speaker-speakers-a",
                                "value": "speakerA"
                            },
                            {
                                "isAvailable": false,
                                "title": "Speaker B",
                                "titleTextID": "speaker-speakers-b",
                                "value": "speakerB"
                            },
                            {
                                "isAvailable": false,
                                "title": "Speaker A + B",
                                "titleTextID": "speaker-speakers-aplusb",
                                "value": "speakerA_B"
                            },
                            {
                                "isAvailable": true,
                                "title": "Off",
                                "titleTextID": "speaker-speakers-off",
                                "value": "off"
                            },
                            {
                                "isAvailable": false,
                                "title": "",
                                "titleTextID": "",
                                "value": ""
                            }
                        ],
                        "currentValue": "speakerA",
                        "isAvailable": true,
                        "target": "speakerSelection",
                        "title": "Speakers",
                        "titleTextID": "speaker-speakers",
                        "type": "enumTarget"
                    },
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "max": 10,
                                "min": -10,
                                "step": 0.5,
                                "title": "Front L",
                                "titleTextID": "frontLLevel",
                                "value": "0.5"
                            }
                        ],
                        "currentValue": "0.5",
                        "deviceUIInfo": "picker",
                        "isAvailable": true,
                        "target": "frontLLevel",
                        "title": "Front L",
                        "titleTextID": "speaker-speakerlevel-frontl",
                        "type": "doubleNumberTarget"
                    },
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "max": 10,
                                "min": -10,
                                "step": 0.5,
                                "title": "Front R",
                                "titleTextID": "frontRLevel",
                                "value": "0.5"
                            }
                        ],
                        "currentValue": "0.5",
                        "deviceUIInfo": "picker",
                        "isAvailable": true,
                        "target": "frontRLevel",
                        "title": "Front R",
                        "titleTextID": "speaker-speakerlevel-frontr",
                        "type": "doubleNumberTarget"
                    },
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "max": 10,
                                "min": -10,
                                "step": 0.5,
                                "title": "Center",
                                "titleTextID": "centerLevel",
                                "value": "7.0"
                            }
                        ],
                        "currentValue": "7.0",
                        "deviceUIInfo": "picker",
                        "isAvailable": true,
                        "target": "centerLevel",
                        "title": "Center",
                        "titleTextID": "speaker-speakerlevel-center",
                        "type": "doubleNumberTarget"
                    },
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "max": 10,
                                "min": -10,
                                "step": 0.5,
                                "title": "Surround L",
                                "titleTextID": "surroundLLevel",
                                "value": "0.0"
                            }
                        ],
                        "currentValue": "0.0",
                        "deviceUIInfo": "picker",
                        "isAvailable": true,
                        "target": "surroundLLevel",
                        "title": "Surround L",
                        "titleTextID": "speaker-speakerlevel-surroundl",
                        "type": "doubleNumberTarget"
                    },
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "max": 10,
                                "min": -10,
                                "step": 0.5,
                                "title": "Surround R",
                                "titleTextID": "surroundRLevel",
                                "value": "3.0"
                            }
                        ],
                        "currentValue": "3.0",
                        "deviceUIInfo": "picker",
                        "isAvailable": true,
                        "target": "surroundRLevel",
                        "title": "Surround R",
                        "titleTextID": "speaker-speakerlevel-surroundr",
                        "type": "doubleNumberTarget"
                    },
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "max": 10,
                                "min": -10,
                                "step": 0.5,
                                "title": "Sur Back",
                                "titleTextID": "surroundcBackLevel",
                                "value": "0.0"
                            }
                        ],
                        "currentValue": "0.0",
                        "deviceUIInfo": "picker",
                        "isAvailable": false,
                        "target": "surroundcBackLevel",
                        "title": "Sur Back",
                        "titleTextID": "speaker-speakerlevel-surroundback",
                        "type": "doubleNumberTarget"
                    },
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "max": 10,
                                "min": -10,
                                "step": 0.5,
                                "title": "Sur Back L",
                                "titleTextID": "surroundBackLLevel",
                                "value": "0.0"
                            }
                        ],
                        "currentValue": "0.0",
                        "deviceUIInfo": "picker",
                        "isAvailable": false,
                        "target": "surroundBackLLevel",
                        "title": "Sur Back L",
                        "titleTextID": "speaker-speakerlevel-surroundbackl",
                        "type": "doubleNumberTarget"
                    },
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "max": 10,
                                "min": -10,
                                "step": 0.5,
                                "title": "Sur Back R",
                                "titleTextID": "surroundBackRLevel",
                                "value": "0.0"
                            }
                        ],
                        "currentValue": "0.0",
                        "deviceUIInfo": "picker",
                        "isAvailable": false,
                        "target": "surroundBackRLevel",
                        "title": "Sur Back R",
                        "titleTextID": "speaker-speakerlevel-surroundbackr",
                        "type": "doubleNumberTarget"
                    },
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "max": 10,
                                "min": -10,
                                "step": 0.5,
                                "title": "Height L",
                                "titleTextID": "heightLLevel",
                                "value": "-2.5"
                            }
                        ],
                        "currentValue": "-2.5",
                        "deviceUIInfo": "picker",
                        "isAvailable": true,
                        "target": "heightLLevel",
                        "title": "Height L",
                        "titleTextID": "speaker-speakerlevel-heightl",
                        "type": "doubleNumberTarget"
                    },
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "max": 10,
                                "min": -10,
                                "step": 0.5,
                                "title": "Height R",
                                "titleTextID": "heightRLevel",
                                "value": "0.0"
                            }
                        ],
                        "currentValue": "0.0",
                        "deviceUIInfo": "picker",
                        "isAvailable": true,
                        "target": "heightRLevel",
                        "title": "Height R",
                        "titleTextID": "speaker-speakerlevel-heightr",
                        "type": "doubleNumberTarget"
                    },
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "max": 10,
                                "min": -10,
                                "step": 0.5,
                                "title": "Subwoofer",
                                "titleTextID": "subwooferLevel",
                                "value": "-7.5"
                            }
                        ],
                        "currentValue": "-7.5",
                        "deviceUIInfo": "picker",
                        "isAvailable": true,
                        "target": "subwooferLevel",
                        "title": "Subwoofer",
                        "titleTextID": "speaker-speakerlevel-subwoofer",
                        "type": "doubleNumberTarget"
                    }
                ]
            };

            const out = apiFilter.filterData(response, {name: "speakerSetting"});

            should(out).not.be.null();
            out.should.be.an.Object();
            out.should.have.ownProperty("payload").which.is.an.Object;
            out.payload.should.have.ownProperty("inCeilingSpeakerMode", "off");
            out.payload.should.have.ownProperty("speakerSelection", "speakerA");
            out.payload.should.have.ownProperty("frontLLevel", 0.5);
            out.payload.should.have.ownProperty("frontRLevel", 0.5);
            out.payload.should.have.ownProperty("centerLevel", 7.0);
            out.payload.should.have.ownProperty("surroundLLevel", 0.0);
            out.payload.should.have.ownProperty("surroundRLevel", 3.0);
            out.payload.should.have.ownProperty("surroundcBackLevel", 0.0);
            out.payload.should.have.ownProperty("surroundBackLLevel", 0.0);
            out.payload.should.have.ownProperty("surroundBackRLevel", 0.0);
            out.payload.should.have.ownProperty("heightLLevel", -2.5);
            out.payload.should.have.ownProperty("heightRLevel", 0.0);
            out.payload.should.have.ownProperty("subwooferLevel", -7.5);
        });

        it("should produce a string as payload", function()
        {
            const response = {
                "service": "audio",
                "method": "getSpeakerSettings",
                "version": "1.0",
                "payload": [
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "title": "Front & Center",
                                "value": "front&center"
                            },
                            {
                                "isAvailable": true,
                                "title": "Front",
                                "value": "front"
                            },
                            {
                                "isAvailable": true,
                                "title": "Off",
                                "value": "off"
                            },
                            {
                                "isAvailable": false,
                                "title": "",
                                "value": ""
                            }
                        ],
                        "currentValue": "off",
                        "isAvailable": true,
                        "target": "inCeilingSpeakerMode",
                        "title": "In-Ceiling Speaker Mode",
                        "titleTextID": "sound-inceiling",
                        "type": "enumTarget"
                    }
                ]
            };

            const out = apiFilter.filterData(response, {name: "speakerSetting"});

            should(out).not.be.null();
            out.should.be.an.Object();
            out.should.have.ownProperty("payload", "off");
        });

        it("should produce a number as payload", function()
        {
            const response = {
                "service": "audio",
                "method": "getSpeakerSettings",
                "version": "1.0",
                "payload": [
                    {
                        "candidate": [
                            {
                                "isAvailable": true,
                                "max": 10,
                                "min": -10,
                                "step": 0.5,
                                "title": "Front L",
                                "titleTextID": "frontLLevel",
                                "value": "0.5"
                            }
                        ],
                        "currentValue": "0.5",
                        "deviceUIInfo": "picker",
                        "isAvailable": true,
                        "target": "frontLLevel",
                        "title": "Front L",
                        "titleTextID": "speaker-speakerlevel-frontl",
                        "type": "doubleNumberTarget"
                    }
                ]
            };

            const out = apiFilter.filterData(response, {name: "speakerSetting"});

            should(out).not.be.null();
            out.should.be.an.Object();
            out.should.have.ownProperty("payload", 0.5);
        });
    });
});
