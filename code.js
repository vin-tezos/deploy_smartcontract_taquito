export default [
    {
      "prim": "storage",
      "args": [
        {
          "prim": "pair",
          "args": [
            {
              "prim": "pair",
              "args": [
                { "prim": "address", "annots": [ "%administrator" ] },
                {
                  "prim": "pair",
                  "args": [
                    {
                      "prim": "big_map",
                      "args": [
                        { "prim": "address" },
                        {
                          "prim": "pair",
                          "args": [
                            { "prim": "map", "args": [ { "prim": "address" }, { "prim": "nat" } ], "annots": [ "%approvals" ] },
                            { "prim": "nat", "annots": [ "%balance" ] }
                          ]
                        }
                      ],
                      "annots": [ "%balances" ]
                    },
                    { "prim": "big_map", "args": [ { "prim": "string" }, { "prim": "bytes" } ], "annots": [ "%metadata" ] }
                  ]
                }
              ]
            },
            {
              "prim": "pair",
              "args": [
                { "prim": "bool", "annots": [ "%paused" ] },
                {
                  "prim": "pair",
                  "args": [
                    {
                      "prim": "big_map",
                      "args": [
                        { "prim": "nat" },
                        {
                          "prim": "pair",
                          "args": [
                            { "prim": "nat", "annots": [ "%token_id" ] },
                            { "prim": "map", "args": [ { "prim": "string" }, { "prim": "bytes" } ], "annots": [ "%token_info" ] }
                          ]
                        }
                      ],
                      "annots": [ "%token_metadata" ]
                    },
                    { "prim": "nat", "annots": [ "%totalSupply" ] }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "prim": "parameter",
      "args": [
        {
          "prim": "or",
          "args": [
            {
              "prim": "or",
              "args": [
                {
                  "prim": "or",
                  "args": [
                    { "prim": "pair", "args": [ { "prim": "address", "annots": [ "%spender" ] }, { "prim": "nat", "annots": [ "%value" ] } ], "annots": [ "%approve" ] },
                    {
                      "prim": "or",
                      "args": [
                        {
                          "prim": "map",
                          "args": [ { "prim": "nat" }, { "prim": "pair", "args": [ { "prim": "address", "annots": [ "%address" ] }, { "prim": "nat", "annots": [ "%value" ] } ] } ],
                          "annots": [ "%bulkBurn" ]
                        },
                        {
                          "prim": "map",
                          "args": [ { "prim": "nat" }, { "prim": "pair", "args": [ { "prim": "address", "annots": [ "%address" ] }, { "prim": "nat", "annots": [ "%amount" ] } ] } ],
                          "annots": [ "%bulkMint" ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "prim": "or",
                  "args": [
                    {
                      "prim": "or",
                      "args": [
                        {
                          "prim": "map",
                          "args": [
                            { "prim": "nat" },
                            {
                              "prim": "pair",
                              "args": [
                                { "prim": "address", "annots": [ "%from" ] },
                                { "prim": "pair", "args": [ { "prim": "address", "annots": [ "%to" ] }, { "prim": "nat", "annots": [ "%value" ] } ] }
                              ]
                            }
                          ],
                          "annots": [ "%bulkTransfer" ]
                        },
                        { "prim": "pair", "args": [ { "prim": "address", "annots": [ "%address" ] }, { "prim": "nat", "annots": [ "%value" ] } ], "annots": [ "%burn" ] }
                      ]
                    },
                    {
                      "prim": "or",
                      "args": [
                        { "prim": "pair", "args": [ { "prim": "unit" }, { "prim": "contract", "args": [ { "prim": "address" } ] } ], "annots": [ "%getAdministrator" ] },
                        {
                          "prim": "pair",
                          "args": [
                            { "prim": "pair", "args": [ { "prim": "address", "annots": [ "%owner" ] }, { "prim": "address", "annots": [ "%spender" ] } ] },
                            { "prim": "contract", "args": [ { "prim": "nat" } ] }
                          ],
                          "annots": [ "%getAllowance" ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "prim": "or",
              "args": [
                {
                  "prim": "or",
                  "args": [
                    { "prim": "pair", "args": [ { "prim": "address" }, { "prim": "contract", "args": [ { "prim": "nat" } ] } ], "annots": [ "%getBalance" ] },
                    {
                      "prim": "or",
                      "args": [
                        { "prim": "pair", "args": [ { "prim": "unit" }, { "prim": "contract", "args": [ { "prim": "nat" } ] } ], "annots": [ "%getTotalSupply" ] },
                        { "prim": "pair", "args": [ { "prim": "address", "annots": [ "%address" ] }, { "prim": "nat", "annots": [ "%value" ] } ], "annots": [ "%mint" ] }
                      ]
                    }
                  ]
                },
                {
                  "prim": "or",
                  "args": [
                    { "prim": "or", "args": [ { "prim": "address", "annots": [ "%setAdministrator" ] }, { "prim": "bool", "annots": [ "%setPause" ] } ] },
                    {
                      "prim": "or",
                      "args": [
                        {
                          "prim": "pair",
                          "args": [
                            { "prim": "address", "annots": [ "%from" ] },
                            { "prim": "pair", "args": [ { "prim": "address", "annots": [ "%to" ] }, { "prim": "nat", "annots": [ "%value" ] } ] }
                          ],
                          "annots": [ "%transfer" ]
                        },
                        { "prim": "pair", "args": [ { "prim": "string", "annots": [ "%key" ] }, { "prim": "bytes", "annots": [ "%value" ] } ], "annots": [ "%update_metadata" ] }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "prim": "code",
      "args": [
        [
          {
            "prim": "CAST",
            "args": [
              {
                "prim": "pair",
                "args": [
                  {
                    "prim": "or",
                    "args": [
                      {
                        "prim": "or",
                        "args": [
                          {
                            "prim": "or",
                            "args": [
                              { "prim": "pair", "args": [ { "prim": "address" }, { "prim": "nat" } ] },
                              {
                                "prim": "or",
                                "args": [
                                  { "prim": "map", "args": [ { "prim": "nat" }, { "prim": "pair", "args": [ { "prim": "address" }, { "prim": "nat" } ] } ] },
                                  { "prim": "map", "args": [ { "prim": "nat" }, { "prim": "pair", "args": [ { "prim": "address" }, { "prim": "nat" } ] } ] }
                                ]
                              }
                            ]
                          },
                          {
                            "prim": "or",
                            "args": [
                              {
                                "prim": "or",
                                "args": [
                                  {
                                    "prim": "map",
                                    "args": [
                                      { "prim": "nat" },
                                      { "prim": "pair", "args": [ { "prim": "address" }, { "prim": "pair", "args": [ { "prim": "address" }, { "prim": "nat" } ] } ] }
                                    ]
                                  },
                                  { "prim": "pair", "args": [ { "prim": "address" }, { "prim": "nat" } ] }
                                ]
                              },
                              {
                                "prim": "or",
                                "args": [
                                  { "prim": "pair", "args": [ { "prim": "unit" }, { "prim": "contract", "args": [ { "prim": "address" } ] } ] },
                                  {
                                    "prim": "pair",
                                    "args": [ { "prim": "pair", "args": [ { "prim": "address" }, { "prim": "address" } ] }, { "prim": "contract", "args": [ { "prim": "nat" } ] } ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "prim": "or",
                        "args": [
                          {
                            "prim": "or",
                            "args": [
                              { "prim": "pair", "args": [ { "prim": "address" }, { "prim": "contract", "args": [ { "prim": "nat" } ] } ] },
                              {
                                "prim": "or",
                                "args": [
                                  { "prim": "pair", "args": [ { "prim": "unit" }, { "prim": "contract", "args": [ { "prim": "nat" } ] } ] },
                                  { "prim": "pair", "args": [ { "prim": "address" }, { "prim": "nat" } ] }
                                ]
                              }
                            ]
                          },
                          {
                            "prim": "or",
                            "args": [
                              { "prim": "or", "args": [ { "prim": "address" }, { "prim": "bool" } ] },
                              {
                                "prim": "or",
                                "args": [
                                  { "prim": "pair", "args": [ { "prim": "address" }, { "prim": "pair", "args": [ { "prim": "address" }, { "prim": "nat" } ] } ] },
                                  { "prim": "pair", "args": [ { "prim": "string" }, { "prim": "bytes" } ] }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "prim": "pair",
                    "args": [
                      {
                        "prim": "pair",
                        "args": [
                          { "prim": "address" },
                          {
                            "prim": "pair",
                            "args": [
                              {
                                "prim": "big_map",
                                "args": [
                                  { "prim": "address" },
                                  { "prim": "pair", "args": [ { "prim": "map", "args": [ { "prim": "address" }, { "prim": "nat" } ] }, { "prim": "nat" } ] }
                                ]
                              },
                              { "prim": "big_map", "args": [ { "prim": "string" }, { "prim": "bytes" } ] }
                            ]
                          }
                        ]
                      },
                      {
                        "prim": "pair",
                        "args": [
                          { "prim": "bool" },
                          {
                            "prim": "pair",
                            "args": [
                              {
                                "prim": "big_map",
                                "args": [
                                  { "prim": "nat" },
                                  { "prim": "pair", "args": [ { "prim": "nat" }, { "prim": "map", "args": [ { "prim": "string" }, { "prim": "bytes" } ] } ] }
                                ]
                              },
                              { "prim": "nat" }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          { "prim": "UNPAIR" },
          {
            "prim": "IF_LEFT",
            "args": [
              [
                {
                  "prim": "IF_LEFT",
                  "args": [
                    [
                      {
                        "prim": "IF_LEFT",
                        "args": [
                          [
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "CAR" },
                            { "prim": "CAR" },
                            { "prim": "SENDER" },
                            { "prim": "COMPARE" },
                            { "prim": "EQ" },
                            {
                              "prim": "IF",
                              "args": [
                                [],
                                [
                                  { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "WrongCondition: sp.sender == self.data.administrator" } ] },
                                  { "prim": "FAILWITH" }
                                ]
                              ]
                            },
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "CAR" },
                            { "prim": "GET", "args": [ { "int": "3" } ] },
                            { "prim": "SENDER" },
                            { "prim": "MEM" },
                            {
                              "prim": "IF",
                              "args": [
                                [],
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  {
                                    "prim": "PUSH",
                                    "args": [
                                      {
                                        "prim": "option",
                                        "args": [ { "prim": "pair", "args": [ { "prim": "map", "args": [ { "prim": "address" }, { "prim": "nat" } ] }, { "prim": "nat" } ] } ]
                                      },
                                      { "prim": "Some", "args": [ { "prim": "Pair", "args": [ [], { "int": "0" } ] } ] }
                                    ]
                                  },
                                  { "prim": "SENDER" },
                                  { "prim": "UPDATE" },
                                  { "prim": "PAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "PAIR" },
                                  { "prim": "SWAP" }
                                ]
                              ]
                            },
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "GET", "args": [ { "int": "3" } ] },
                            { "prim": "IF", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_Paused" } ] }, { "prim": "FAILWITH" } ], [] ] },
                            { "prim": "PUSH", "args": [ { "prim": "nat" }, { "int": "0" } ] },
                            { "prim": "DUP", "args": [ { "int": "3" } ] },
                            { "prim": "CAR" },
                            { "prim": "GET", "args": [ { "int": "3" } ] },
                            { "prim": "SENDER" },
                            { "prim": "GET" },
                            { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "103" } ] }, { "prim": "FAILWITH" } ], [] ] },
                            { "prim": "CAR" },
                            { "prim": "DUP", "args": [ { "int": "3" } ] },
                            { "prim": "CAR" },
                            { "prim": "GET" },
                            { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "nat" }, { "int": "0" } ] } ], [] ] },
                            { "prim": "COMPARE" },
                            { "prim": "EQ" },
                            {
                              "prim": "IF",
                              "args": [
                                [ { "prim": "PUSH", "args": [ { "prim": "bool" }, { "prim": "True" } ] } ],
                                [ { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "PUSH", "args": [ { "prim": "nat" }, { "int": "0" } ] }, { "prim": "COMPARE" }, { "prim": "EQ" } ]
                              ]
                            },
                            {
                              "prim": "IF",
                              "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_UnsafeAllowanceChange" } ] }, { "prim": "FAILWITH" } ] ]
                            },
                            { "prim": "SWAP" },
                            { "prim": "UNPAIR" },
                            { "prim": "UNPAIR" },
                            { "prim": "SWAP" },
                            { "prim": "UNPAIR" },
                            { "prim": "DUP" },
                            { "prim": "SENDER" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "GET" },
                            { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "105" } ] }, { "prim": "FAILWITH" } ], [] ] },
                            { "prim": "DUP" },
                            { "prim": "CAR" },
                            { "prim": "DUP", "args": [ { "int": "8" } ] },
                            { "prim": "CDR" },
                            { "prim": "SOME" },
                            { "prim": "DIG", "args": [ { "int": "8" } ] },
                            { "prim": "CAR" },
                            { "prim": "UPDATE" },
                            { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                            { "prim": "SOME" },
                            { "prim": "SWAP" },
                            { "prim": "UPDATE" },
                            { "prim": "PAIR" },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "PAIR" }
                          ],
                          [
                            {
                              "prim": "IF_LEFT",
                              "args": [
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "SENDER" },
                                  { "prim": "COMPARE" },
                                  { "prim": "EQ" },
                                  { "prim": "IF", "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_NotAdmin" } ] }, { "prim": "FAILWITH" } ] ] },
                                  { "prim": "DUP" },
                                  {
                                    "prim": "ITER",
                                    "args": [
                                      [
                                        { "prim": "DUP" },
                                        { "prim": "GET", "args": [ { "int": "4" } ] },
                                        { "prim": "DUP", "args": [ { "int": "4" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "DUP", "args": [ { "int": "3" } ] },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "169" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "CDR" },
                                        { "prim": "COMPARE" },
                                        { "prim": "GE" },
                                        {
                                          "prim": "IF",
                                          "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_InsufficientBalance" } ] }, { "prim": "FAILWITH" } ] ]
                                        },
                                        { "prim": "DUP", "args": [ { "int": "3" } ] },
                                        { "prim": "UNPAIR" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "DUP" },
                                        { "prim": "DUP", "args": [ { "int": "6" } ] },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "170" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "DUP", "args": [ { "int": "7" } ] },
                                        { "prim": "GET", "args": [ { "int": "4" } ] },
                                        { "prim": "DIG", "args": [ { "int": "9" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "DUP", "args": [ { "int": "9" } ] },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "170" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "CDR" },
                                        { "prim": "SUB" },
                                        { "prim": "ISNAT" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "170" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "UPDATE", "args": [ { "int": "2" } ] },
                                        { "prim": "SOME" },
                                        { "prim": "SWAP" },
                                        { "prim": "UPDATE" },
                                        { "prim": "PAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "PAIR" },
                                        { "prim": "PAIR" },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "3" } ] },
                                        { "prim": "SWAP" },
                                        { "prim": "GET", "args": [ { "int": "4" } ] },
                                        { "prim": "DIG", "args": [ { "int": "3" } ] },
                                        { "prim": "GET", "args": [ { "int": "6" } ] },
                                        { "prim": "SUB" },
                                        { "prim": "ISNAT" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "171" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "UPDATE", "args": [ { "int": "6" } ] },
                                        { "prim": "SWAP" }
                                      ]
                                    ]
                                  },
                                  { "prim": "DROP" }
                                ],
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "SENDER" },
                                  { "prim": "COMPARE" },
                                  { "prim": "EQ" },
                                  { "prim": "IF", "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_NotAdmin" } ] }, { "prim": "FAILWITH" } ] ] },
                                  { "prim": "DUP" },
                                  {
                                    "prim": "ITER",
                                    "args": [
                                      [
                                        { "prim": "DUP", "args": [ { "int": "3" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "SWAP" },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "MEM" },
                                        {
                                          "prim": "IF",
                                          "args": [
                                            [],
                                            [
                                              { "prim": "DIG", "args": [ { "int": "2" } ] },
                                              { "prim": "UNPAIR" },
                                              { "prim": "UNPAIR" },
                                              { "prim": "SWAP" },
                                              { "prim": "UNPAIR" },
                                              {
                                                "prim": "PUSH",
                                                "args": [
                                                  {
                                                    "prim": "option",
                                                    "args": [
                                                      { "prim": "pair", "args": [ { "prim": "map", "args": [ { "prim": "address" }, { "prim": "nat" } ] }, { "prim": "nat" } ] }
                                                    ]
                                                  },
                                                  { "prim": "Some", "args": [ { "prim": "Pair", "args": [ [], { "int": "0" } ] } ] }
                                                ]
                                              },
                                              { "prim": "DUP", "args": [ { "int": "6" } ] },
                                              { "prim": "GET", "args": [ { "int": "3" } ] },
                                              { "prim": "UPDATE" },
                                              { "prim": "PAIR" },
                                              { "prim": "SWAP" },
                                              { "prim": "PAIR" },
                                              { "prim": "PAIR" },
                                              { "prim": "DUG", "args": [ { "int": "2" } ] }
                                            ]
                                          ]
                                        },
                                        { "prim": "DIG", "args": [ { "int": "2" } ] },
                                        { "prim": "UNPAIR" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "DUP" },
                                        { "prim": "DUP", "args": [ { "int": "6" } ] },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "153" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "DUP" },
                                        { "prim": "CDR" },
                                        { "prim": "DUP", "args": [ { "int": "8" } ] },
                                        { "prim": "GET", "args": [ { "int": "4" } ] },
                                        { "prim": "ADD" },
                                        { "prim": "UPDATE", "args": [ { "int": "2" } ] },
                                        { "prim": "SOME" },
                                        { "prim": "SWAP" },
                                        { "prim": "UPDATE" },
                                        { "prim": "PAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "PAIR" },
                                        { "prim": "PAIR" },
                                        { "prim": "DUP" },
                                        { "prim": "GET", "args": [ { "int": "6" } ] },
                                        { "prim": "DIG", "args": [ { "int": "2" } ] },
                                        { "prim": "GET", "args": [ { "int": "4" } ] },
                                        { "prim": "ADD" },
                                        { "prim": "UPDATE", "args": [ { "int": "6" } ] },
                                        { "prim": "SWAP" }
                                      ]
                                    ]
                                  },
                                  { "prim": "DROP" }
                                ]
                              ]
                            }
                          ]
                        ]
                      },
                      { "prim": "NIL", "args": [ { "prim": "operation" } ] }
                    ],
                    [
                      {
                        "prim": "IF_LEFT",
                        "args": [
                          [
                            {
                              "prim": "IF_LEFT",
                              "args": [
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "SENDER" },
                                  { "prim": "COMPARE" },
                                  { "prim": "EQ" },
                                  { "prim": "IF", "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_NotAdmin" } ] }, { "prim": "FAILWITH" } ] ] },
                                  { "prim": "DUP" },
                                  {
                                    "prim": "ITER",
                                    "args": [
                                      [
                                        { "prim": "DUP", "args": [ { "int": "3" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "SWAP" },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "MEM" },
                                        {
                                          "prim": "IF",
                                          "args": [
                                            [],
                                            [
                                              { "prim": "DIG", "args": [ { "int": "2" } ] },
                                              { "prim": "UNPAIR" },
                                              { "prim": "UNPAIR" },
                                              { "prim": "SWAP" },
                                              { "prim": "UNPAIR" },
                                              {
                                                "prim": "PUSH",
                                                "args": [
                                                  {
                                                    "prim": "option",
                                                    "args": [
                                                      { "prim": "pair", "args": [ { "prim": "map", "args": [ { "prim": "address" }, { "prim": "nat" } ] }, { "prim": "nat" } ] }
                                                    ]
                                                  },
                                                  { "prim": "Some", "args": [ { "prim": "Pair", "args": [ [], { "int": "0" } ] } ] }
                                                ]
                                              },
                                              { "prim": "DUP", "args": [ { "int": "6" } ] },
                                              { "prim": "GET", "args": [ { "int": "3" } ] },
                                              { "prim": "UPDATE" },
                                              { "prim": "PAIR" },
                                              { "prim": "SWAP" },
                                              { "prim": "PAIR" },
                                              { "prim": "PAIR" },
                                              { "prim": "DUG", "args": [ { "int": "2" } ] }
                                            ]
                                          ]
                                        },
                                        { "prim": "DUP", "args": [ { "int": "3" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "SWAP" },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "GET", "args": [ { "int": "5" } ] },
                                        { "prim": "MEM" },
                                        {
                                          "prim": "IF",
                                          "args": [
                                            [],
                                            [
                                              { "prim": "DIG", "args": [ { "int": "2" } ] },
                                              { "prim": "UNPAIR" },
                                              { "prim": "UNPAIR" },
                                              { "prim": "SWAP" },
                                              { "prim": "UNPAIR" },
                                              {
                                                "prim": "PUSH",
                                                "args": [
                                                  {
                                                    "prim": "option",
                                                    "args": [
                                                      { "prim": "pair", "args": [ { "prim": "map", "args": [ { "prim": "address" }, { "prim": "nat" } ] }, { "prim": "nat" } ] }
                                                    ]
                                                  },
                                                  { "prim": "Some", "args": [ { "prim": "Pair", "args": [ [], { "int": "0" } ] } ] }
                                                ]
                                              },
                                              { "prim": "DUP", "args": [ { "int": "6" } ] },
                                              { "prim": "GET", "args": [ { "int": "5" } ] },
                                              { "prim": "UPDATE" },
                                              { "prim": "PAIR" },
                                              { "prim": "SWAP" },
                                              { "prim": "PAIR" },
                                              { "prim": "PAIR" },
                                              { "prim": "DUG", "args": [ { "int": "2" } ] }
                                            ]
                                          ]
                                        },
                                        { "prim": "DUP" },
                                        { "prim": "GET", "args": [ { "int": "6" } ] },
                                        { "prim": "DUP", "args": [ { "int": "4" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "DUP", "args": [ { "int": "3" } ] },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "91" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "CDR" },
                                        { "prim": "COMPARE" },
                                        { "prim": "GE" },
                                        {
                                          "prim": "IF",
                                          "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_InsufficientBalance" } ] }, { "prim": "FAILWITH" } ] ]
                                        },
                                        { "prim": "DUP", "args": [ { "int": "3" } ] },
                                        { "prim": "UNPAIR" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "DUP" },
                                        { "prim": "DUP", "args": [ { "int": "6" } ] },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "92" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "DUP", "args": [ { "int": "7" } ] },
                                        { "prim": "GET", "args": [ { "int": "6" } ] },
                                        { "prim": "DIG", "args": [ { "int": "9" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "DUP", "args": [ { "int": "9" } ] },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "92" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "CDR" },
                                        { "prim": "SUB" },
                                        { "prim": "ISNAT" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "92" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "UPDATE", "args": [ { "int": "2" } ] },
                                        { "prim": "SOME" },
                                        { "prim": "SWAP" },
                                        { "prim": "UPDATE" },
                                        { "prim": "DUP" },
                                        { "prim": "DUP", "args": [ { "int": "6" } ] },
                                        { "prim": "GET", "args": [ { "int": "5" } ] },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "93" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "DUP" },
                                        { "prim": "CDR" },
                                        { "prim": "DUP", "args": [ { "int": "8" } ] },
                                        { "prim": "GET", "args": [ { "int": "6" } ] },
                                        { "prim": "ADD" },
                                        { "prim": "UPDATE", "args": [ { "int": "2" } ] },
                                        { "prim": "SOME" },
                                        { "prim": "SWAP" },
                                        { "prim": "UPDATE" },
                                        { "prim": "PAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "PAIR" },
                                        { "prim": "PAIR" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "DUP" },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "SENDER" },
                                        { "prim": "COMPARE" },
                                        { "prim": "NEQ" },
                                        {
                                          "prim": "IF",
                                          "args": [
                                            [
                                              { "prim": "DUP", "args": [ { "int": "3" } ] },
                                              { "prim": "CAR" },
                                              { "prim": "CAR" },
                                              { "prim": "SENDER" },
                                              { "prim": "COMPARE" },
                                              { "prim": "NEQ" }
                                            ],
                                            [ { "prim": "PUSH", "args": [ { "prim": "bool" }, { "prim": "False" } ] } ]
                                          ]
                                        },
                                        {
                                          "prim": "IF",
                                          "args": [
                                            [
                                              { "prim": "DUP", "args": [ { "int": "3" } ] },
                                              { "prim": "UNPAIR" },
                                              { "prim": "UNPAIR" },
                                              { "prim": "SWAP" },
                                              { "prim": "UNPAIR" },
                                              { "prim": "DUP" },
                                              { "prim": "DUP", "args": [ { "int": "6" } ] },
                                              { "prim": "GET", "args": [ { "int": "3" } ] },
                                              { "prim": "DUP" },
                                              { "prim": "DUG", "args": [ { "int": "2" } ] },
                                              { "prim": "GET" },
                                              { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "95" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                              { "prim": "DUP" },
                                              { "prim": "CAR" },
                                              { "prim": "DUP", "args": [ { "int": "8" } ] },
                                              { "prim": "GET", "args": [ { "int": "6" } ] },
                                              { "prim": "DIG", "args": [ { "int": "10" } ] },
                                              { "prim": "CAR" },
                                              { "prim": "GET", "args": [ { "int": "3" } ] },
                                              { "prim": "DIG", "args": [ { "int": "9" } ] },
                                              { "prim": "GET", "args": [ { "int": "3" } ] },
                                              { "prim": "GET" },
                                              { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "95" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                              { "prim": "CAR" },
                                              { "prim": "SENDER" },
                                              { "prim": "GET" },
                                              { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "95" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                              { "prim": "SUB" },
                                              { "prim": "ISNAT" },
                                              { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "95" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                              { "prim": "SOME" },
                                              { "prim": "SENDER" },
                                              { "prim": "UPDATE" },
                                              { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                                              { "prim": "SOME" },
                                              { "prim": "SWAP" },
                                              { "prim": "UPDATE" },
                                              { "prim": "PAIR" },
                                              { "prim": "SWAP" },
                                              { "prim": "PAIR" },
                                              { "prim": "PAIR" },
                                              { "prim": "SWAP" }
                                            ],
                                            [ { "prim": "DROP" } ]
                                          ]
                                        }
                                      ]
                                    ]
                                  },
                                  { "prim": "DROP" }
                                ],
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "SENDER" },
                                  { "prim": "COMPARE" },
                                  { "prim": "EQ" },
                                  { "prim": "IF", "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_NotAdmin" } ] }, { "prim": "FAILWITH" } ] ] },
                                  { "prim": "DUP" },
                                  { "prim": "CDR" },
                                  { "prim": "DUP", "args": [ { "int": "3" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET", "args": [ { "int": "3" } ] },
                                  { "prim": "DUP", "args": [ { "int": "3" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "160" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "CDR" },
                                  { "prim": "COMPARE" },
                                  { "prim": "GE" },
                                  {
                                    "prim": "IF",
                                    "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_InsufficientBalance" } ] }, { "prim": "FAILWITH" } ] ]
                                  },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "UNPAIR" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "DUP" },
                                  { "prim": "DUP", "args": [ { "int": "6" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "161" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "DUP", "args": [ { "int": "7" } ] },
                                  { "prim": "CDR" },
                                  { "prim": "DIG", "args": [ { "int": "8" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET", "args": [ { "int": "3" } ] },
                                  { "prim": "DUP", "args": [ { "int": "9" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "161" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "CDR" },
                                  { "prim": "SUB" },
                                  { "prim": "ISNAT" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "161" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "UPDATE", "args": [ { "int": "2" } ] },
                                  { "prim": "SOME" },
                                  { "prim": "SWAP" },
                                  { "prim": "UPDATE" },
                                  { "prim": "PAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "PAIR" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "SWAP" },
                                  { "prim": "CDR" },
                                  { "prim": "DIG", "args": [ { "int": "2" } ] },
                                  { "prim": "GET", "args": [ { "int": "6" } ] },
                                  { "prim": "SUB" },
                                  { "prim": "ISNAT" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "162" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "UPDATE", "args": [ { "int": "6" } ] }
                                ]
                              ]
                            },
                            { "prim": "NIL", "args": [ { "prim": "operation" } ] }
                          ],
                          [
                            {
                              "prim": "IF_LEFT",
                              "args": [
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "NIL", "args": [ { "prim": "operation" } ] },
                                  { "prim": "DIG", "args": [ { "int": "2" } ] },
                                  { "prim": "CDR" },
                                  { "prim": "PUSH", "args": [ { "prim": "mutez" }, { "int": "0" } ] },
                                  { "prim": "DIG", "args": [ { "int": "3" } ] },
                                  { "prim": "TRANSFER_TOKENS" },
                                  { "prim": "CONS" }
                                ],
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET", "args": [ { "int": "3" } ] },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "MEM" },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [
                                        { "prim": "SWAP" },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "SWAP" },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "CAR" },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "121" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "CAR" },
                                        { "prim": "SWAP" },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "CDR" },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "nat" }, { "int": "0" } ] } ], [] ] }
                                      ],
                                      [ { "prim": "PUSH", "args": [ { "prim": "nat" }, { "int": "0" } ] } ]
                                    ]
                                  },
                                  { "prim": "NIL", "args": [ { "prim": "operation" } ] },
                                  { "prim": "DIG", "args": [ { "int": "2" } ] },
                                  { "prim": "CDR" },
                                  { "prim": "PUSH", "args": [ { "prim": "mutez" }, { "int": "0" } ] },
                                  { "prim": "DIG", "args": [ { "int": "3" } ] },
                                  { "prim": "TRANSFER_TOKENS" },
                                  { "prim": "CONS" }
                                ]
                              ]
                            }
                          ]
                        ]
                      }
                    ]
                  ]
                }
              ],
              [
                {
                  "prim": "IF_LEFT",
                  "args": [
                    [
                      {
                        "prim": "IF_LEFT",
                        "args": [
                          [
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "CAR" },
                            { "prim": "GET", "args": [ { "int": "3" } ] },
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "CAR" },
                            { "prim": "MEM" },
                            {
                              "prim": "IF",
                              "args": [
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET", "args": [ { "int": "3" } ] },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "114" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "CDR" }
                                ],
                                [ { "prim": "PUSH", "args": [ { "prim": "nat" }, { "int": "0" } ] } ]
                              ]
                            },
                            { "prim": "NIL", "args": [ { "prim": "operation" } ] },
                            { "prim": "DIG", "args": [ { "int": "2" } ] },
                            { "prim": "CDR" },
                            { "prim": "PUSH", "args": [ { "prim": "mutez" }, { "int": "0" } ] },
                            { "prim": "DIG", "args": [ { "int": "3" } ] },
                            { "prim": "TRANSFER_TOKENS" },
                            { "prim": "CONS" }
                          ],
                          [
                            {
                              "prim": "IF_LEFT",
                              "args": [
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "GET", "args": [ { "int": "6" } ] },
                                  { "prim": "NIL", "args": [ { "prim": "operation" } ] },
                                  { "prim": "DIG", "args": [ { "int": "2" } ] },
                                  { "prim": "CDR" },
                                  { "prim": "PUSH", "args": [ { "prim": "mutez" }, { "int": "0" } ] },
                                  { "prim": "DIG", "args": [ { "int": "3" } ] },
                                  { "prim": "TRANSFER_TOKENS" },
                                  { "prim": "CONS" }
                                ],
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "SENDER" },
                                  { "prim": "COMPARE" },
                                  { "prim": "EQ" },
                                  { "prim": "IF", "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_NotAdmin" } ] }, { "prim": "FAILWITH" } ] ] },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET", "args": [ { "int": "3" } ] },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "MEM" },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [],
                                      [
                                        { "prim": "SWAP" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "UNPAIR" },
                                        {
                                          "prim": "PUSH",
                                          "args": [
                                            {
                                              "prim": "option",
                                              "args": [ { "prim": "pair", "args": [ { "prim": "map", "args": [ { "prim": "address" }, { "prim": "nat" } ] }, { "prim": "nat" } ] } ]
                                            },
                                            { "prim": "Some", "args": [ { "prim": "Pair", "args": [ [], { "int": "0" } ] } ] }
                                          ]
                                        },
                                        { "prim": "DUP", "args": [ { "int": "6" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "UPDATE" },
                                        { "prim": "PAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "PAIR" },
                                        { "prim": "PAIR" },
                                        { "prim": "SWAP" }
                                      ]
                                    ]
                                  },
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "DUP" },
                                  { "prim": "DUP", "args": [ { "int": "6" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "144" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "DUP" },
                                  { "prim": "CDR" },
                                  { "prim": "DUP", "args": [ { "int": "8" } ] },
                                  { "prim": "CDR" },
                                  { "prim": "ADD" },
                                  { "prim": "UPDATE", "args": [ { "int": "2" } ] },
                                  { "prim": "SOME" },
                                  { "prim": "SWAP" },
                                  { "prim": "UPDATE" },
                                  { "prim": "PAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "PAIR" },
                                  { "prim": "DUP" },
                                  { "prim": "GET", "args": [ { "int": "6" } ] },
                                  { "prim": "DIG", "args": [ { "int": "2" } ] },
                                  { "prim": "CDR" },
                                  { "prim": "ADD" },
                                  { "prim": "UPDATE", "args": [ { "int": "6" } ] },
                                  { "prim": "NIL", "args": [ { "prim": "operation" } ] }
                                ]
                              ]
                            }
                          ]
                        ]
                      }
                    ],
                    [
                      {
                        "prim": "IF_LEFT",
                        "args": [
                          [
                            {
                              "prim": "IF_LEFT",
                              "args": [
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "SENDER" },
                                  { "prim": "COMPARE" },
                                  { "prim": "EQ" },
                                  { "prim": "IF", "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_NotAdmin" } ] }, { "prim": "FAILWITH" } ] ] },
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "CDR" },
                                  { "prim": "DIG", "args": [ { "int": "2" } ] },
                                  { "prim": "PAIR" },
                                  { "prim": "PAIR" }
                                ],
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "SENDER" },
                                  { "prim": "COMPARE" },
                                  { "prim": "EQ" },
                                  { "prim": "IF", "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_NotAdmin" } ] }, { "prim": "FAILWITH" } ] ] },
                                  { "prim": "UPDATE", "args": [ { "int": "3" } ] }
                                ]
                              ]
                            }
                          ],
                          [
                            {
                              "prim": "IF_LEFT",
                              "args": [
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "SENDER" },
                                  { "prim": "COMPARE" },
                                  { "prim": "EQ" },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [],
                                      [
                                        { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "WrongCondition: sp.sender == self.data.administrator" } ] },
                                        { "prim": "FAILWITH" }
                                      ]
                                    ]
                                  },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET", "args": [ { "int": "3" } ] },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "MEM" },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [],
                                      [
                                        { "prim": "SWAP" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "UNPAIR" },
                                        {
                                          "prim": "PUSH",
                                          "args": [
                                            {
                                              "prim": "option",
                                              "args": [ { "prim": "pair", "args": [ { "prim": "map", "args": [ { "prim": "address" }, { "prim": "nat" } ] }, { "prim": "nat" } ] } ]
                                            },
                                            { "prim": "Some", "args": [ { "prim": "Pair", "args": [ [], { "int": "0" } ] } ] }
                                          ]
                                        },
                                        { "prim": "DUP", "args": [ { "int": "6" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "UPDATE" },
                                        { "prim": "PAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "PAIR" },
                                        { "prim": "PAIR" },
                                        { "prim": "SWAP" }
                                      ]
                                    ]
                                  },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET", "args": [ { "int": "3" } ] },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "GET", "args": [ { "int": "3" } ] },
                                  { "prim": "MEM" },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [],
                                      [
                                        { "prim": "SWAP" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "UNPAIR" },
                                        {
                                          "prim": "PUSH",
                                          "args": [
                                            {
                                              "prim": "option",
                                              "args": [ { "prim": "pair", "args": [ { "prim": "map", "args": [ { "prim": "address" }, { "prim": "nat" } ] }, { "prim": "nat" } ] } ]
                                            },
                                            { "prim": "Some", "args": [ { "prim": "Pair", "args": [ [], { "int": "0" } ] } ] }
                                          ]
                                        },
                                        { "prim": "DUP", "args": [ { "int": "6" } ] },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "UPDATE" },
                                        { "prim": "PAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "PAIR" },
                                        { "prim": "PAIR" },
                                        { "prim": "SWAP" }
                                      ]
                                    ]
                                  },
                                  { "prim": "DUP" },
                                  { "prim": "GET", "args": [ { "int": "4" } ] },
                                  { "prim": "DUP", "args": [ { "int": "3" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET", "args": [ { "int": "3" } ] },
                                  { "prim": "DUP", "args": [ { "int": "3" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "78" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "CDR" },
                                  { "prim": "COMPARE" },
                                  { "prim": "GE" },
                                  {
                                    "prim": "IF",
                                    "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_InsufficientBalance" } ] }, { "prim": "FAILWITH" } ] ]
                                  },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "UNPAIR" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "DUP" },
                                  { "prim": "DUP", "args": [ { "int": "6" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "79" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "DUP", "args": [ { "int": "7" } ] },
                                  { "prim": "GET", "args": [ { "int": "4" } ] },
                                  { "prim": "DIG", "args": [ { "int": "8" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET", "args": [ { "int": "3" } ] },
                                  { "prim": "DUP", "args": [ { "int": "9" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "79" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "CDR" },
                                  { "prim": "SUB" },
                                  { "prim": "ISNAT" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "79" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "UPDATE", "args": [ { "int": "2" } ] },
                                  { "prim": "SOME" },
                                  { "prim": "SWAP" },
                                  { "prim": "UPDATE" },
                                  { "prim": "DUP" },
                                  { "prim": "DUP", "args": [ { "int": "6" } ] },
                                  { "prim": "GET", "args": [ { "int": "3" } ] },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "80" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "DUP" },
                                  { "prim": "CDR" },
                                  { "prim": "DUP", "args": [ { "int": "8" } ] },
                                  { "prim": "GET", "args": [ { "int": "4" } ] },
                                  { "prim": "ADD" },
                                  { "prim": "UPDATE", "args": [ { "int": "2" } ] },
                                  { "prim": "SOME" },
                                  { "prim": "SWAP" },
                                  { "prim": "UPDATE" },
                                  { "prim": "PAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "PAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "CAR" },
                                  { "prim": "SENDER" },
                                  { "prim": "COMPARE" },
                                  { "prim": "NEQ" },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [
                                        { "prim": "SWAP" },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "CAR" },
                                        { "prim": "SENDER" },
                                        { "prim": "COMPARE" },
                                        { "prim": "NEQ" }
                                      ],
                                      [ { "prim": "PUSH", "args": [ { "prim": "bool" }, { "prim": "False" } ] } ]
                                    ]
                                  },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [
                                        { "prim": "SWAP" },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "UNPAIR" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "DUP" },
                                        { "prim": "DUP", "args": [ { "int": "6" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "82" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "DUP" },
                                        { "prim": "CAR" },
                                        { "prim": "DUP", "args": [ { "int": "8" } ] },
                                        { "prim": "GET", "args": [ { "int": "4" } ] },
                                        { "prim": "DIG", "args": [ { "int": "9" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "DIG", "args": [ { "int": "9" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "82" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "CAR" },
                                        { "prim": "SENDER" },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "82" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "SUB" },
                                        { "prim": "ISNAT" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "82" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "SOME" },
                                        { "prim": "SENDER" },
                                        { "prim": "UPDATE" },
                                        { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                                        { "prim": "SOME" },
                                        { "prim": "SWAP" },
                                        { "prim": "UPDATE" },
                                        { "prim": "PAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "PAIR" },
                                        { "prim": "PAIR" }
                                      ],
                                      [ { "prim": "DROP" } ]
                                    ]
                                  }
                                ],
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "SENDER" },
                                  { "prim": "COMPARE" },
                                  { "prim": "EQ" },
                                  { "prim": "IF", "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "FA1.2_NotAdmin" } ] }, { "prim": "FAILWITH" } ] ] },
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP", "args": [ { "int": "5" } ] },
                                  { "prim": "CDR" },
                                  { "prim": "SOME" },
                                  { "prim": "DIG", "args": [ { "int": "5" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "UPDATE" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "PAIR" }
                                ]
                              ]
                            }
                          ]
                        ]
                      },
                      { "prim": "NIL", "args": [ { "prim": "operation" } ] }
                    ]
                  ]
                }
              ]
            ]
          },
          { "prim": "PAIR" }
        ]
      ]
    }
  ]