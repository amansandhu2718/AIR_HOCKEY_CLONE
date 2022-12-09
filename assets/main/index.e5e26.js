window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Ball: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c14c1SKcrhOFYB2iDyiMi0G", "Ball");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Player_1 = require("./Player");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Ball = function(_super) {
      __extends(Ball, _super);
      function Ball() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ballSpeedWHenPlayerMovingPlayerHits = -1e3;
        _this.ballSpeedWHenPlayerStationaryPlayerHits = -300;
        return _this;
      }
      Ball.prototype.onLoad = function() {};
      Ball.prototype.start = function() {
        console.log("ball start");
      };
      Ball.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (2 == otherCollider.tag) {
          var ismoving = otherCollider.getComponent(Player_1.default).ismoving;
          if (ismoving) {
            console.log("onBeginContact1");
            var worldManifold = contact.getWorldManifold();
            var normal = worldManifold.normal;
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(normal.x * this.ballSpeedWHenPlayerMovingPlayerHits, normal.y * this.ballSpeedWHenPlayerMovingPlayerHits);
            this.node.getComponent(cc.RigidBody).angularVelocity = -1e3 * normal.x;
          } else {
            console.log("onBeginContact2");
            var worldManifold = contact.getWorldManifold();
            var normal = worldManifold.normal;
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(normal.x * this.ballSpeedWHenPlayerStationaryPlayerHits, normal.y * this.ballSpeedWHenPlayerStationaryPlayerHits);
            this.node.getComponent(cc.RigidBody).angularVelocity = normal.x * this.ballSpeedWHenPlayerStationaryPlayerHits;
          }
        }
      };
      __decorate([ property ], Ball.prototype, "ballSpeedWHenPlayerMovingPlayerHits", void 0);
      __decorate([ property ], Ball.prototype, "ballSpeedWHenPlayerStationaryPlayerHits", void 0);
      Ball = __decorate([ ccclass ], Ball);
      return Ball;
    }(cc.Component);
    exports.default = Ball;
    cc._RF.pop();
  }, {
    "./Player": "Player"
  } ],
  GameManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78326p/lVhIbrQ2R09wCGRC", "GameManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LobbyLocals_1 = require("./LobbyLocals");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameState = LobbyLocals_1.GameState.Menu;
        _this.playerOneScore = 0;
        _this.playerTwoScore = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.start = function() {
        this.SwitchGameState(LobbyLocals_1.GameState.Welcome);
        this.PlayerOneScoreLabel.node.active = false;
        this.PlayerTwoScoreLabel.node.active = false;
      };
      NewClass.prototype.SwitchGameState = function(state) {
        var _this = this;
        switch (state) {
         case LobbyLocals_1.GameState.Welcome:
          this.PlayerOneScoreLabel.node.active = false;
          this.PlayerTwoScoreLabel.node.active = false;
          this.welcomenode.active = true;
          this.welcomenode.opacity = 255;
          this.welcomenode.getComponentInChildren(cc.Label).string = "Welcome";
          cc.tween(this.welcomenode).to(1.5, {}).call(function() {
            _this.menuButton.active = false;
            _this.welcomenode.active = false;
            _this.welcomenode.opacity = 255;
            _this.welcomenode.scale = 1;
            _this.SwitchGameState(LobbyLocals_1.GameState.Menu);
          }).start();
          break;

         case LobbyLocals_1.GameState.Menu:
          this.PlayerOneScoreLabel.node.active = false;
          this.PlayerTwoScoreLabel.node.active = false;
          this.menupanel.active = true;
          break;

         case LobbyLocals_1.GameState.Start:
          this.PlayerOneScoreLabel.node.active = false;
          this.PlayerTwoScoreLabel.node.active = false;
          this.menuButton.active = false;
          this.ballNode.active = false;
          this.menupanel.active = false;
          this.welcomenode.active = true;
          this.welcomenode.opacity = 255;
          this.playerTop.active = false;
          this.playerBottom.active = false;
          this.welcomenode.getComponentInChildren(cc.Label).string = "Loading...";
          cc.tween(this.welcomenode).to(1, {}).call(function() {
            _this.PlayerOneScoreLabel.node.active = true;
            _this.PlayerTwoScoreLabel.node.active = true;
            _this.menuButton.active = true;
            _this.playerTop.active = true;
            _this.playerBottom.active = true;
            _this.playerTop.setPosition(cc.v2(0, 595.784));
            _this.playerBottom.setPosition(cc.v2(0, -114.795));
            _this.ballNode.active = true;
            _this.table.active = true;
            _this.welcomenode.active = false;
            _this.ballNode.setPosition(cc.v2(0, 0));
            _this.ballNode.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
            _this.ballNode.getComponent(cc.RigidBody).allowSleep = true;
            _this.ballNode.getComponent(cc.RigidBody).allowSleep = false;
          }).start();
          break;

         case LobbyLocals_1.GameState.playing:
          this.ballNode.active = false;
          this.GoalLabel.node.active = true;
          this.GoalLabel.node.scale = .25;
          cc.tween(this.GoalLabel.node).to(1.5, {
            scale: 1
          }).call(function() {
            _this.GoalLabel.node.active = false;
            _this.SwitchGameState(LobbyLocals_1.GameState.Start);
          }).start();
          break;

         case LobbyLocals_1.GameState.end:
         case LobbyLocals_1.GameState.result:
         case LobbyLocals_1.GameState.exit:
        }
      };
      NewClass.prototype.OnPlayButtonClicked = function() {
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.PlayerOneScoreLabel.string = "" + this.playerOneScore;
        this.PlayerTwoScoreLabel.string = "" + this.playerTwoScore;
        this.SwitchGameState(LobbyLocals_1.GameState.Start);
      };
      NewClass.prototype.OnclickMenuBUtton = function() {
        this.SwitchGameState(LobbyLocals_1.GameState.Menu);
      };
      NewClass.prototype.GoalCOunt = function(player) {
        switch (player) {
         case 0:
          this.playerOneScore++;
          this.PlayerOneScoreLabel.string = "" + this.playerOneScore;
          this.SwitchGameState(LobbyLocals_1.GameState.playing);
          break;

         case 1:
          this.playerTwoScore++;
          this.PlayerTwoScoreLabel.string = "" + this.playerTwoScore;
          this.SwitchGameState(LobbyLocals_1.GameState.playing);
        }
      };
      NewClass.prototype.onEnable = function() {
        this.node.on("GOAL", this.GoalCOunt, this);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "PlayerOneScoreLabel", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "PlayerTwoScoreLabel", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "GoalLabel", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "ballNode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "LobbyUINode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "welcomenode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "menuButton", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "menupanel", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "table", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "playerTop", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "playerBottom", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./LobbyLocals": "LobbyLocals"
  } ],
  GoalPost: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ffeed7F11dNdpoGN4i7vOVl", "GoalPost");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GoalPost = function(_super) {
      __extends(GoalPost, _super);
      function GoalPost() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.goalPostNum = 0;
        return _this;
      }
      GoalPost.prototype.start = function() {};
      GoalPost.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if ("Ball" == otherCollider.node.name && 0 == this.goalPostNum) {
          console.log("Player One GOAL..!!");
          this.GM.emit("GOAL", 0);
        }
        if ("Ball" == otherCollider.node.name && 1 == this.goalPostNum) {
          console.log("Player Two GOAL..!!");
          this.GM.emit("GOAL", 1);
        }
      };
      __decorate([ property(cc.Node) ], GoalPost.prototype, "GM", void 0);
      __decorate([ property ], GoalPost.prototype, "goalPostNum", void 0);
      GoalPost = __decorate([ ccclass ], GoalPost);
      return GoalPost;
    }(cc.Component);
    exports.default = GoalPost;
    cc._RF.pop();
  }, {} ],
  LobbyLocals: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bdc4f/18N9C1rKJpsQfB+9b", "LobbyLocals");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameState = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameState;
    (function(GameState) {
      GameState[GameState["Welcome"] = 0] = "Welcome";
      GameState[GameState["Menu"] = 1] = "Menu";
      GameState[GameState["Start"] = 2] = "Start";
      GameState[GameState["playing"] = 3] = "playing";
      GameState[GameState["end"] = 4] = "end";
      GameState[GameState["result"] = 5] = "result";
      GameState[GameState["exit"] = 6] = "exit";
    })(GameState = exports.GameState || (exports.GameState = {}));
    var LobbyLocals = function(_super) {
      __extends(LobbyLocals, _super);
      function LobbyLocals() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LobbyLocals.prototype.start = function() {};
      LobbyLocals = __decorate([ ccclass ], LobbyLocals);
      return LobbyLocals;
    }(cc.Component);
    exports.default = LobbyLocals;
    cc._RF.pop();
  }, {} ],
  Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4eae2HO/3lMD46A9VXoiqUf", "Player");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Player = function(_super) {
      __extends(Player, _super);
      function Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ismoving = false;
        return _this;
      }
      Player.prototype.onLoad = function() {
        var self = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          self.ismoving = true;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.MovePlayer, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          self.ismoving = false;
        }, this);
      };
      Player.prototype.start = function() {};
      Player.prototype.MovePlayer = function(event) {
        this.ismoving = true;
        var delta = event.touch.getDelta();
        if (delta.x < 500 && delta.y < 500) {
          this.node.x += delta.x;
          this.node.y += delta.y;
        }
      };
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {} ],
  Table: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ecd810snphK/aveTK27tHpG", "Table");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Table = function(_super) {
      __extends(Table, _super);
      function Table() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isDebug = false;
        _this.physicsManager = null;
        return _this;
      }
      Table.prototype.onLoad = function() {
        this.physicsManager = cc.director.getPhysicsManager();
        this.physicsManager.enabled = true;
        this.physicsManager.gravity = cc.v2(0, -50);
        this.isDebug && (cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit | cc.PhysicsManager.DrawBits.e_pairBit | cc.PhysicsManager.DrawBits.e_centerOfMassBit | cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit);
      };
      Table.prototype.onEnable = function() {};
      Table.prototype.start = function() {};
      __decorate([ property ], Table.prototype, "isDebug", void 0);
      Table = __decorate([ ccclass ], Table);
      return Table;
    }(cc.Component);
    exports.default = Table;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Ball", "GameManager", "GoalPost", "LobbyLocals", "Player", "Table" ]);