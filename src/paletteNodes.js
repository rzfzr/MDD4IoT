// eslint-disable-next-line import/no-anonymous-default-export
export default [{
        name: 'Arduino Uno',
        color: 'green',
        extras: {
            type: 'controller',
            analogPorts: 6,
            digitalPorts: 14,
        },
        methods: [
            'setup()',
            'loop()'
        ]
    }, {
        name: 'Arduino Nano',
        color: 'green',
        extras: {
            type: 'controller',
            analogPorts: 6,
            digitalPorts: 22,
        },
        methods: [
            'setup()',
            'loop()'
        ]
    },
    {
        name: 'Arduino Mega',
        color: 'green',
        extras: {
            type: 'controller',
            analogPorts: 16,
            digitalPorts: 54,
        },
        methods: [
            'setup()',
            'loop()'
        ]
    },
    {
        name: 'Arduino Leonardo',
        color: 'green',
        extras: {
            type: 'controller',
            analogPorts: 12,
            digitalPorts: 20,
        },
        methods: [
            'setup()',
            'loop()'
        ]
    },
    {
        name: 'Arduino Flora',
        color: 'green',
        extras: {
            type: 'controller',
            analogPorts: 4,
            digitalPorts: 8,
        },
        methods: [
            'setup()',
            'loop()'
        ]
    },
    {
        name: 'Digital I/O',
        color: 'cyan',
        extras: {
            type: 'built-in'
        },
        methods: [
            'void digitalWrite(int pin, int value)',
            'void pinMode(int pin, int mode)',
            'int digitalRead(int pin)',
        ]
    },
    {
        name: 'Analog I/O',
        color: 'cyan',
        extras: {
            type: 'built-in'
        },
        methods: [
            'void analoglWrite(int pin, int value)',
            'void pinMode(int pin, int mode)',
            'void analogReference(int type)',

        ]
    },
    {
        name: 'Time',
        color: 'cyan',
        extras: {
            type: 'built-in'
        },
        methods: [
            'void delay(int ms)',
            'void delayMicroseconds(int us)',
            'unsigned long micros()',
            'unsigned long millis()',
        ]
    },
    {
        name: 'Math',
        color: 'cyan',
        extras: {
            type: 'built-in'
        },
        methods: [
            'void delay(int ms)',
            'int abs(int x)',
            'int constrain(int x, int a, int b)',
            'int map(int value, int fromLow, int fromHigh, int toLow, int toHigh)',
            'any? max(any x, any y)',
            'any? min(any x, any y)',
            'double pow(float base, float exponent)',
            'double sq(any x)',
            'double sqrt(any x)',
        ]
    },
    {
        name: 'Trigonometry',
        color: 'cyan',
        extras: {
            type: 'built-in'
        },
        methods: [
            'double cos(float rad)',
            'double sin(float rad)',
            'double tan(float rad)',
        ]
    },
    {
        name: 'Random Numbers',
        color: 'cyan',
        extras: {
            type: 'built-in'
        },
        methods: [
            'void randomSeed(long seed)',
            'long random(? max)',
            'long random(? min, ? max)',
        ]
    },
    {
        name: 'true',
        color: 'cyan',
        extras: {
            type: 'built-in-constant'
        },
        outs: [
            'out',
        ]
    }, {
        name: 'false',
        color: 'cyan',
        extras: {
            type: 'built-in-constant'
        },
        outs: [
            'out',
        ]
    }, {
        name: 'HIGH',
        color: 'cyan',
        extras: {
            type: 'built-in-constant'
        },
        outs: [
            'out',
        ]
    }, {
        name: 'LOW',
        color: 'cyan',
        extras: {
            type: 'built-in-constant'
        },
        outs: [
            'out',
        ]
    },
    {
        name: 'Digital Port',
        color: 'white',
        extras: {
            type: 'port'
        },
        outs: [
            'port',
        ]
    }, {
        name: 'Analog Port',
        color: 'white',
        extras: {
            type: 'port'
        },
        outs: [
            'port',
        ]
    },
    {
        name: 'Function',
        extras: {
            type: 'logic'
        },
        color: 'grey',
        outs: [
            'call',
        ],
        ins: [
            'trigger',
        ]
    }, {
        name: 'Condition',
        extras: {
            type: 'logic'
        },
        color: 'grey',
        outs: [
            'True',
            'False'
        ],
        ins: [
            'trigger',
            'x',
            'y'
        ]
    },
    {
        name: 'Loop',
        extras: {
            type: 'logic'
        },
        color: 'grey',
        outs: [
            'True',
            'False'
        ],
        ins: [
            'startValue',
            'stopValue'
        ]
    },

    {
        name: 'TwoWire Interface',
        color: 'blue',
        extras: {
            type: 'component',
            library: 'Wire.h'
        },
        methods: [
            'void begin()',
            'void beginTransmission()',
            'void setClock()',
            'void onReceive()',
            'void onRequest()',
            'byte requestFrom()',
            'byte endTransmission()',
            'byte write()',
            'byte available()',
            'byte read()'
        ]
    },
    {
        name: 'PWM Servo',
        color: 'orange',
        extras: {
            type: 'component',
            library: 'Adafruit_PWMServoDriver.h'
        },
        methods: [
            'void begin(uint8_t prescale=0)',
            'void sleep()',
            'void wakeup()',
            'void setExtClk(uint8_t prescale)',
            'void setPWMFreq(float freq)',
            'void setOutputMode(bool totempole)',
            'void setPWM(uint8_t num, uint16_t on, uint16_t off)',
            'void setPin(uint8_t num, uint16_t val, bool invert=false)',
            'void writeMicroseconds(uint8_t num, uint16_t Microseconds)',
            'void setOscillatorFrequency(uint32_t freq)',
            'uint8_t getPWM(uint8_t num)',
            'uint8_t readPrescale()',
            'uint32_t getOscillatorFrequency()',
        ]
    },
    {
        name: 'Servo',
        color: 'orange',
        extras: {
            type: 'component',
            library: 'Servo.h'
        },
        methods: [
            'void detach()',
            'void write(int)',
            'void writeMicroseconds(int)',
            'uint8_t attach(int)',
            'uint8_t attach(int, int, int)',
            'int read()',
            'int readMicroseconds()',
            'bool attached()',
        ]
    },
    {
        name: 'Stepper',
        color: 'orange',
        extras: {
            type: 'component',
            library: 'Stepper.h'
        },
        methods: [
            'Stepper(int, int, int)',
            'Stepper(int, int, int, int, int)',
            'Stepper(int, int, int, int, int, int)',
            'void setSpeed(long whatSpeed)',
            'void step(int number_of_steps)',
            'int version(void)',
        ]
    },
    {
        name: 'Parameter(s)',
        color: 'pink',
        extras: {
            type: 'parameter'
        },
        ins: [
            'in-0'
        ],
        outs: [
            'out-0',
        ]
    },
    {
        name: 'Variable Integer',
        color: 'pink',
        extras: {
            type: 'variable'
        },
        ins: [
            'void setValue(int)',
        ],
        outs: [
            'int getValue()',
        ]
    },
    {
        name: 'Variable Boolean',
        color: 'pink',
        extras: {
            type: 'variable'
        },
        ins: [
            'void setValue(bool)',
        ],
        outs: [
            'bool',
        ]
    },
    {
        name: 'Constant Integer',
        color: 'pink',
        extras: {
            type: 'constant'
        },
        ins: [
            'in'
        ],
        outs: [
            'out',
        ]
    }, {
        name: 'Constant Boolean',
        color: 'pink',
        extras: {
            type: 'constant'
        },
        ins: [
            'in'
        ],
        outs: [
            'out',
        ]
    },
]