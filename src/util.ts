

function getStrippedId(id: string): string {
    return id.slice(2, id.length - 1);
}

export default getStrippedId;