export type SayHelloProps = {
    firstName: string;
};

export type localServerProps = {
    pathdir: string;
    name: string;
};

export type getLocalServerProps = {
    name: string;
};

export type saveDataProps = {
    server: {
        name: string;
        status: string;
        path: string;
    };
    schema: {
        name: string;
        schema: Record<string, any>;
    };
    data: Record<string, any>;
};

export type readDataProps = {
    server: {
        name: string;
        status: string;
        path: string;
    };
    schema: {
        name: string;
        schema: Record<string, any>;
    };
};
